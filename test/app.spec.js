const path = require('path');
const fse = require('fs-extra');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('JHipster generator jhipster-testcontainers', () => {
    describe('Test with postgres', () => {
        beforeEach(done => {
            helpers
                .run(path.join(__dirname, '../generators/app'))
                .inTmpDir(dir => {
                    fse.copySync(path.join(__dirname, '../test/templates/postgresql'), dir);
                })
                .withOptions({
                    testmode: true
                })
                .withPrompts({
                    message: 'simple message to say hello'
                })
                .on('end', done);
        });

        it('generate testcontainers application properties', () => {
            assert.file(['src/test/resources/config/application-testcontainers.yml']);
        });
    });
});
