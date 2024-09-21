import ApplicationSerializer from './application';

export default class BranchSerializer extends ApplicationSerializer {
  primaryKey = 'name'; // Branches don't have an ID, use 'name' as the unique key
}
