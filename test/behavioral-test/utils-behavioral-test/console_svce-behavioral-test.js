/*
 * console_svce-test.js
 *
 * Created @author Antonio Carrasco Valero 201610131355
 *
 *
 ***************************************************************************

 Copyright 2016 Antonio Carrasco Valero
 Jasmine tests in Javascript for core modules including a base prototype and prototypes hierarchy, intended to be reused on the Browser as core for i.e. Angular Controllers and Services, as in the uiwire component. Licensed under EUPL  http://www.uiwire.org

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




/// <reference path="src/utils/console_ng_svce.js"/>
"use strict";




describe("prettytypes-ng console_svce behavioral tests", function () {


    beforeEach( module( "typesRegistry", "rootsTypes", "consoleSvce"));

    var aConsoleSvce           = null;


    beforeEach( inject(function( _ConsoleSvce_){

        aConsoleSvce = _ConsoleSvce_;
        // console.log( "typeof anOverrider= " + typeof anOverrider);
        // console.log( "anOverrider keys = " + Object.keys( anOverrider));
    }));





    function strRepeat(str, qty) {
        if (qty < 1) return '';
        var result = '';
        while (qty > 0) {
            if (qty & 1) result += str;
            qty >>= 1, str += str;
        }
        return result;
    }











    it("Does not Collect log error info", function () {

        aConsoleSvce.clear();


        aConsoleSvce.pSetWriteToConsole(          true);
        aConsoleSvce.pSetCollectLogs(             false);

        var aMessage = "MessageOne";

        var someCollectedLogsBefore = aConsoleSvce.fCollectedLogsCopy();
        var aNumCollectedLogsBefore = someCollectedLogsBefore.length;
        expect( aNumCollectedLogsBefore).toBe( 0);

        aConsoleSvce.log( aMessage);

        aConsoleSvce.error( aMessage);

        aConsoleSvce.info( aMessage);

        var someCollectedLogsAfter = aConsoleSvce.fCollectedLogsCopy();
        var aNumCollectedLogsAfter = someCollectedLogsAfter ? someCollectedLogsAfter.length : 0;
        expect( aNumCollectedLogsAfter).toBe( 0);

        aConsoleSvce.pSetCollectLogs(    false);

        aConsoleSvce.clear();
    });






    it("Collects log MessageOne", function () {

        aConsoleSvce.clear();


        aConsoleSvce.pSetWriteToConsole(          true);
        aConsoleSvce.pSetCollectLogs(             true);
        aConsoleSvce.pSetMaxCollectedLogsLength(  1000);

        var aMessage = "MessageOne";

        var someCollectedLogsBefore = aConsoleSvce.fCollectedLogsCopy();
        var aNumCollectedLogsBefore = someCollectedLogsBefore.length;
        expect( aNumCollectedLogsBefore).toBe( 0);

        aConsoleSvce.log( aMessage);

        var someCollectedLogsAfter = aConsoleSvce.fCollectedLogsCopy();
        var aNumCollectedLogsAfter = someCollectedLogsAfter.length;
        expect( aNumCollectedLogsAfter).toBe( 1);


        var aLastLog = someCollectedLogsAfter[ someCollectedLogsAfter.length - 1];
        expect( aLastLog).not.toBeNull();

        var aLastLogKind = aLastLog[ 0];
        expect( aLastLogKind).toBe( "log");

        var aLastLogMessage = aLastLog[ 1];
        expect( aLastLogMessage).toBe( aMessage);

        aConsoleSvce.pSetCollectLogs(    false);

        aConsoleSvce.clear();
    });






    it("Collects error MessageOne", function () {

        aConsoleSvce.clear();


        aConsoleSvce.pSetWriteToConsole(          true);
        aConsoleSvce.pSetCollectLogs(             true);
        aConsoleSvce.pSetMaxCollectedLogsLength(  1000);

        var aMessage = "MessageOne";

        var someCollectedLogsBefore = aConsoleSvce.fCollectedLogsCopy();
        var aNumCollectedLogsBefore = someCollectedLogsBefore.length;
        expect( aNumCollectedLogsBefore).toBe( 0);

        aConsoleSvce.error( aMessage);

        var someCollectedLogsAfter = aConsoleSvce.fCollectedLogsCopy();
        var aNumCollectedLogsAfter = someCollectedLogsAfter.length;
        expect( aNumCollectedLogsAfter).toBe( 1);


        var aLastLog = someCollectedLogsAfter[ someCollectedLogsAfter.length - 1];
        expect( aLastLog).not.toBeNull();

        var aLastLogKind = aLastLog[ 0];
        expect( aLastLogKind).toBe( "error");

        var aLastLogMessage = aLastLog[ 1];
        expect( aLastLogMessage).toBe( aMessage);

        aConsoleSvce.pSetCollectLogs(    false);

        aConsoleSvce.clear();
    });








    it("Collects info MessageOne", function () {

        aConsoleSvce.clear();


        aConsoleSvce.pSetWriteToConsole(          true);
        aConsoleSvce.pSetCollectLogs(             true);
        aConsoleSvce.pSetMaxCollectedLogsLength(  1000);

        var aMessage = "MessageOne";

        var someCollectedLogsBefore = aConsoleSvce.fCollectedLogsCopy();
        var aNumCollectedLogsBefore = someCollectedLogsBefore.length;
        expect( aNumCollectedLogsBefore).toBe( 0);

        aConsoleSvce.info( aMessage);

        var someCollectedLogsAfter = aConsoleSvce.fCollectedLogsCopy();
        var aNumCollectedLogsAfter = someCollectedLogsAfter.length;
        expect( aNumCollectedLogsAfter).toBe( 1);


        var aLastLog = someCollectedLogsAfter[ someCollectedLogsAfter.length - 1];
        expect( aLastLog).not.toBeNull();

        var aLastLogKind = aLastLog[ 0];
        expect( aLastLogKind).toBe( "info");

        var aLastLogMessage = aLastLog[ 1];
        expect( aLastLogMessage).toBe( aMessage);

        aConsoleSvce.pSetCollectLogs(    false);

        aConsoleSvce.clear();
    });








    it("Collects log upto size 1000", function () {

        aConsoleSvce.clear();


        aConsoleSvce.pSetWriteToConsole(          true);
        aConsoleSvce.pSetCollectLogs(             true);
        aConsoleSvce.pSetMaxCollectedLogsLength(  1000);


        var someCollectedLogsBefore = aConsoleSvce.fCollectedLogsCopy();
        var aNumCollectedLogsBefore = someCollectedLogsBefore.length;
        expect( aNumCollectedLogsBefore).toBe( 0);



        /* First log of 500 chars, which fit the 1000 limit */

        var aMessage500 = strRepeat( "x", 500);
        aConsoleSvce.log( aMessage500);

        var someCollectedLogsAfter = aConsoleSvce.fCollectedLogsCopy();
        var aNumCollectedLogsAfter = someCollectedLogsAfter.length;
        expect( aNumCollectedLogsAfter).toBe( 1);


        var aLastLog = someCollectedLogsAfter[ 0];
        expect( aLastLog).not.toBeNull();

        var aLastLogKind = aLastLog[ 0];
        expect( aLastLogKind).toBe( "log");

        var aLastLogMessage = aLastLog[ 1];
        expect( aLastLogMessage).toBe( aMessage500);





        /* Second log of 499 chars, which added to the previous 500 chars for a total of 999 still fit the 1000 limit */

        var aMessage499 = strRepeat( "x", 499);
        aConsoleSvce.log( aMessage499);

        someCollectedLogsAfter = aConsoleSvce.fCollectedLogsCopy();
        aNumCollectedLogsAfter = someCollectedLogsAfter.length;
        expect( aNumCollectedLogsAfter).toBe( 2);


        aLastLog = someCollectedLogsAfter[ 0];
        expect( aLastLog).not.toBeNull();

        aLastLogKind = aLastLog[ 0];
        expect( aLastLogKind).toBe( "log");

        aLastLogMessage = aLastLog[ 1];
        expect( aLastLogMessage).toBe( aMessage500);



        aLastLog = someCollectedLogsAfter[ 1];
        expect( aLastLog).not.toBeNull();

        aLastLogKind = aLastLog[ 0];
        expect( aLastLogKind).toBe( "log");

        aLastLogMessage = aLastLog[ 1];
        expect( aLastLogMessage).toBe( aMessage499);




        /* Third log of 2 chars, which added to the previous 500 + 499 chars = 999 for a total of 1001 do not fit the 1000 limit so the first log is discarded */

        var aMessage2 = strRepeat( "x", 2);
        aConsoleSvce.log( aMessage2);

        someCollectedLogsAfter = aConsoleSvce.fCollectedLogsCopy();
        aNumCollectedLogsAfter = someCollectedLogsAfter.length;
        expect( aNumCollectedLogsAfter).toBe( 2);


        aLastLog = someCollectedLogsAfter[ 0];
        expect( aLastLog).not.toBeNull();

        aLastLogKind = aLastLog[ 0];
        expect( aLastLogKind).toBe( "log");

        aLastLogMessage = aLastLog[ 1];
        expect( aLastLogMessage).toBe( aMessage499);



        aLastLog = someCollectedLogsAfter[ 1];
        expect( aLastLog).not.toBeNull();

        aLastLogKind = aLastLog[ 0];
        expect( aLastLogKind).toBe( "log");

        aLastLogMessage = aLastLog[ 1];
        expect( aLastLogMessage).toBe( aMessage2);




        aConsoleSvce.pSetCollectLogs(    false);

        aConsoleSvce.clear();
    });





});



