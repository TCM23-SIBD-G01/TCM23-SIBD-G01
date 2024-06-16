"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'lojas',
    connector: 'mysql',
    url: 'mysql://root@localhost/lojas',
    host: '',
    port: 0,
    user: '',
    password: '',
    database: ''
};
let DbDataSource = class DbDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
exports.DbDataSource = DbDataSource;
DbDataSource.dataSourceName = 'lojas';
DbDataSource.defaultConfig = config;
exports.DbDataSource = DbDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.lojas', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], DbDataSource);
//# sourceMappingURL=lojas.js.map