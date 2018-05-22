/*
 * browser-selenium-nomod-test.js
 *
 * Created @author Antonio Carrasco Valero 201805191230
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 2017 2018 Antonio Carrasco Valero
 Multi-platform Javascript EC5 coding patterns and base super-prototypes, for write-once, run and test everywhere (angular, require, node).

Licensed under the EUPL, Version 1.1 only (the "Licence");
You may not use this work except in compliance with the
Licence.
You may obtain a copy of the Licence at:
https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
See the Licence for the specific language governing
permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 *
 */

var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

jasmine.DEFAULT_TIMEOUT_INTERVAL = 9999999;

describe('browser-selenium-nomod-test on server/app/index_nomod.html', function() {
    
    beforeAll( function( done) {
        driver.get("http://localhost:3000/index_nomod.html");
        driver.findElement(webdriver.By.id("domid_h1_01"));
        done();
    });
    
    it('should be on correct page', function ( done) {
        driver.getTitle()
            .then( function( theTitle) {
                expect( theTitle).toEqual( "index_nomod.html");
                done();
            });
    });
    
    afterAll( function( done) {
        driver.get("http://localhost:3000/close");
        done();
    });
});
