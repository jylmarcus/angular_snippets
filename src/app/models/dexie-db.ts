import Dexie from  'dexie';

export class DexieDb extends Dexie{

  //.Table<type of object to be stored, type of key>
  stringDB!: Dexie.Table<string, number>;

  constructor() {
    super('DexieDb')
    this.version(1).stores({
      storageObjects: `++ObjectId`
    });
    //.table(`tableName`)
    this.stringDB = this.table(`stringDB`)
  }
}
