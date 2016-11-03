/*
 * console_svce-behavioral-test.js
 *
 * Created @author Antonio Carrasco Valero 201610081846
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






/// <reference path="src/identifying/dumpingpolicy_type.js"/>
"use strict";




describe("prettytype  ConsoleSvce tests", function () {

    var aModule_TypesRegistrySvceFactory = ModuleFactory_TypesRegistrySvce();
    //console.log( "typeof aModule_TypesRegistrySvceFactory= " + typeof aModule_TypesRegistrySvceFactory);

    var aTypesRegistrySvce = aModule_TypesRegistrySvceFactory();
    //console.log( "typeof aTypesRegistrySvce= " + typeof aTypesRegistrySvce);
    //console.log( "aTypesRegistrySvce keys = " + Object.keys( aTypesRegistrySvce));


    var aModule_OverriderTypeFactory = ModuleFactory_OverriderType();
    //console.log( "typeof aModule_OverriderTypeFactory= " + typeof aModule_OverriderTypeFactory);


    var aModule_OverriderType = aModule_OverriderTypeFactory( aTypesRegistrySvce);
    //console.log( "typeof aModule_OverriderType= " + typeof aModule_OverriderType);

    var aOverriderType_title = "Overrider-Title-test";

    var anOverrider = new aModule_OverriderType.Overrider_Constructor( aOverriderType_title);
    //console.log( "typeof anOverrider= " + typeof anOverrider);
    //console.log( "anOverrider keys = " + Object.keys( anOverrider));





    var aModule_IdentifierTypeFactory = ModuleFactory_IdentifierType();
    //console.log( "typeof aModule_IdentifierTypeFactory= " + typeof aModule_IdentifierTypeFactory);


    var aModule_IdentifierType = aModule_IdentifierTypeFactory( aTypesRegistrySvce, anOverrider);
    //console.log( "typeof aModule_IdentifierType= " + typeof aModule_IdentifierType);

    var aIdentifierType_title = "Identifier-Title-test";

    var anIdentifier = new aModule_IdentifierType.Identifier_Constructor( aIdentifierType_title);
    //console.log( "typeof anIdentifier= " + typeof anIdentifier);
    //console.log( "anIdentifier keys = " + Object.keys( anIdentifier));




    var aModule_RecordTypeFactory = ModuleFactory_RecordType();
    //console.log( "typeof aModule_RecordTypeFactory= " + typeof aModule_RecordTypeFactory);


    var aModule_RecordType = aModule_RecordTypeFactory( aTypesRegistrySvce, anOverrider);
    //console.log( "typeof aModule_RecordType= " + typeof aModule_RecordType);







    var aModule_RecordingPolicyTypeFactory = ModuleFactory_RecordingPolicyType();
    // console.log( "typeof aModule_RecordingPolicyTypeFactory= " + typeof aModule_RecordingPolicyTypeFactory);


    var aModule_RecordingPolicyType = aModule_RecordingPolicyTypeFactory(
        aTypesRegistrySvce,
        anOverrider,
        anIdentifier);
    // console.log( "typeof aModule_RecordingPolicyType= " + typeof aModule_RecordingPolicyType);



    var aModule_RecordingPolicyKeepAllTypeFactory = ModuleFactory_RecordingPolicyKeepAllType();
    // console.log( "typeof aModule_RecordingPolicyKeepAllTypeFactory= " + typeof aModule_RecordingPolicyKeepAllTypeFactory);


    var aModule_RecordingPolicyKeepAllType = aModule_RecordingPolicyKeepAllTypeFactory( aTypesRegistrySvce, anOverrider, aModule_RecordingPolicyType);
    // console.log( "typeof aModule_RecordingPolicyKeepAllType= " + typeof aModule_RecordingPolicyKeepAllType);







    var aModule_ConsoleSvceFactory = ModuleFactory_ConsoleSvce();
    // console.log( "typeof aModule_ConsoleSvceFactory= " + typeof aModule_ConsoleSvceFactory);

    var aModule_ConsoleSvce = aModule_ConsoleSvceFactory( aTypesRegistrySvce, anOverrider);
    // console.log( "typeof aModule_ConsoleSvce= " + typeof aModule_ConsoleSvce);







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

        aModule_ConsoleSvce.clear();


        aModule_ConsoleSvce.pSetWriteToConsole(          true);
        aModule_ConsoleSvce.pSetCollectLogs(             false);

        var aMessage = "MessageOne";

        var someCollectedLogsBefore = aModule_ConsoleSvce.fCollectedLogsCopy();
        var aNumCollectedLogsBefore = someCollectedLogsBefore.length;
        expect( aNumCollectedLogsBefore).toBe( 0);

        aModule_ConsoleSvce.log( aMessage);

        aModule_ConsoleSvce.error( aMessage);

        aModule_ConsoleSvce.info( aMessage);

        var someCollectedLogsAfter = aModule_ConsoleSvce.fCollectedLogsCopy();
        var aNumCollectedLogsAfter = someCollectedLogsAfter ? someCollectedLogsAfter.length : 0;
        expect( aNumCollectedLogsAfter).toBe( 0);

        aModule_ConsoleSvce.pSetCollectLogs(    false);

        aModule_ConsoleSvce.clear();
    });






    it("Collects log MessageOne", function () {

        aModule_ConsoleSvce.clear();


        aModule_ConsoleSvce.pSetWriteToConsole(          true);
        aModule_ConsoleSvce.pSetCollectLogs(             true);
        aModule_ConsoleSvce.pSetMaxCollectedLogsLength(  1000);

        var aMessage = "MessageOne";

        var someCollectedLogsBefore = aModule_ConsoleSvce.fCollectedLogsCopy();
        var aNumCollectedLogsBefore = someCollectedLogsBefore.length;
        expect( aNumCollectedLogsBefore).toBe( 0);

        aModule_ConsoleSvce.log( aMessage);

        var someCollectedLogsAfter = aModule_ConsoleSvce.fCollectedLogsCopy();
        var aNumCollectedLogsAfter = someCollectedLogsAfter.length;
        expect( aNumCollectedLogsAfter).toBe( 1);


        var aLastLog = someCollectedLogsAfter[ someCollectedLogsAfter.length - 1];
        expect( aLastLog).not.toBeNull();

        var aLastLogKind = aLastLog[ 0];
        expect( aLastLogKind).toBe( "log");

        var aLastLogMessage = aLastLog[ 1];
        expect( aLastLogMessage).toBe( aMessage);

        aModule_ConsoleSvce.pSetCollectLogs(    false);

        aModule_ConsoleSvce.clear();
    });






    it("Collects error MessageOne", function () {

        aModule_ConsoleSvce.clear();


        aModule_ConsoleSvce.pSetWriteToConsole(          true);
        aModule_ConsoleSvce.pSetCollectLogs(             true);
        aModule_ConsoleSvce.pSetMaxCollectedLogsLength(  1000);

        var aMessage = "MessageOne";

        var someCollectedLogsBefore = aModule_ConsoleSvce.fCollectedLogsCopy();
        var aNumCollectedLogsBefore = someCollectedLogsBefore.length;
        expect( aNumCollectedLogsBefore).toBe( 0);

        aModule_ConsoleSvce.error( aMessage);

        var someCollectedLogsAfter = aModule_ConsoleSvce.fCollectedLogsCopy();
        var aNumCollectedLogsAfter = someCollectedLogsAfter.length;
        expect( aNumCollectedLogsAfter).toBe( 1);


        var aLastLog = someCollectedLogsAfter[ someCollectedLogsAfter.length - 1];
        expect( aLastLog).not.toBeNull();

        var aLastLogKind = aLastLog[ 0];
        expect( aLastLogKind).toBe( "error");

        var aLastLogMessage = aLastLog[ 1];
        expect( aLastLogMessage).toBe( aMessage);

        aModule_ConsoleSvce.pSetCollectLogs(    false);

        aModule_ConsoleSvce.clear();
    });








    it("Collects info MessageOne", function () {

        aModule_ConsoleSvce.clear();


        aModule_ConsoleSvce.pSetWriteToConsole(          true);
        aModule_ConsoleSvce.pSetCollectLogs(             true);
        aModule_ConsoleSvce.pSetMaxCollectedLogsLength(  1000);

        var aMessage = "MessageOne";

        var someCollectedLogsBefore = aModule_ConsoleSvce.fCollectedLogsCopy();
        var aNumCollectedLogsBefore = someCollectedLogsBefore.length;
        expect( aNumCollectedLogsBefore).toBe( 0);

        aModule_ConsoleSvce.info( aMessage);

        var someCollectedLogsAfter = aModule_ConsoleSvce.fCollectedLogsCopy();
        var aNumCollectedLogsAfter = someCollectedLogsAfter.length;
        expect( aNumCollectedLogsAfter).toBe( 1);


        var aLastLog = someCollectedLogsAfter[ someCollectedLogsAfter.length - 1];
        expect( aLastLog).not.toBeNull();

        var aLastLogKind = aLastLog[ 0];
        expect( aLastLogKind).toBe( "info");

        var aLastLogMessage = aLastLog[ 1];
        expect( aLastLogMessage).toBe( aMessage);

        aModule_ConsoleSvce.pSetCollectLogs(    false);

        aModule_ConsoleSvce.clear();
    });








    it("Collects log upto size 1000", function () {

        aModule_ConsoleSvce.clear();


        aModule_ConsoleSvce.pSetWriteToConsole(          true);
        aModule_ConsoleSvce.pSetCollectLogs(             true);
        aModule_ConsoleSvce.pSetMaxCollectedLogsLength(  1000);

        
        var someCollectedLogsBefore = aModule_ConsoleSvce.fCollectedLogsCopy();
        var aNumCollectedLogsBefore = someCollectedLogsBefore.length;
        expect( aNumCollectedLogsBefore).toBe( 0);


        
        /* First log of 500 chars, which fit the 1000 limit */

        var aMessage500 = strRepeat( "x", 500);
        aModule_ConsoleSvce.log( aMessage500);

        var someCollectedLogsAfter = aModule_ConsoleSvce.fCollectedLogsCopy();
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
        aModule_ConsoleSvce.log( aMessage499);

        someCollectedLogsAfter = aModule_ConsoleSvce.fCollectedLogsCopy();
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
        aModule_ConsoleSvce.log( aMessage2);

        someCollectedLogsAfter = aModule_ConsoleSvce.fCollectedLogsCopy();
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




        aModule_ConsoleSvce.pSetCollectLogs(    false);

        aModule_ConsoleSvce.clear();
    });






});
