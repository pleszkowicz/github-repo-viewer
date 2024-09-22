import { module, test } from 'qunit';
import { setupRenderingTest } from 'github-repo-viewer/tests/helpers';
import { click, fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | forms/organization-form', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders and submits organization name', async function (assert) {
    // Setting up initial organization value and a mock for onSubmit
    this.set('organization', 'Test Organization');
    this.set('onSubmit', (organization) => {
      assert.step(`Submitted organization: ${organization}`);
    });

    // Render the component
    await render(hbs`
      <Forms::OrganizationForm
        @organization={{this.organization}}
        @onSubmit={{this.onSubmit}}
      />
    `);

    // Check if the input field is rendered with the initial organization name
    assert
      .dom('input')
      .hasValue(
        'Test Organization',
        'The input field is rendered with the initial value',
      );

    // Simulate user typing a new organization name
    await fillIn('input', 'New Organization');

    // Verify that the input field is updated
    assert
      .dom('input')
      .hasValue('New Organization', 'The input field is updated after typing');

    // Simulate form submission
    await click('button[type="submit"]');

    // Verify that the onSubmit action is called with the trimmed organization name
    assert.verifySteps(
      ['Submitted organization: New Organization'],
      'The onSubmit action was triggered with the correct organization name',
    );
  });
});
