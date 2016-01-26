/*
 * common_type-record-test.js
 *
 * Created @author Antonio Carrasco Valero 201601241700
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





/// <reference path="src/common/common_type.js"/>
"use strict";




describe("Common record tests", function () {

    var aModule_TypesRegistrySvceFactory = ModuleFactory_TypesRegistrySvce();
    // console.log( "typeof aModule_TypesRegistrySvceFactory= " + typeof aModule_TypesRegistrySvceFactory);

    var aTypesRegistrySvce = aModule_TypesRegistrySvceFactory();
    // console.log( "typeof aTypesRegistrySvce= " + typeof aTypesRegistrySvce);
    // console.log( "aTypesRegistrySvce keys = " + Object.keys( aTypesRegistrySvce));


    var aModule_OverriderTypeFactory = ModuleFactory_OverriderType();
    // console.log( "typeof aModule_OverriderTypeFactory= " + typeof aModule_OverriderTypeFactory);


    var aModule_OverriderType = aModule_OverriderTypeFactory( aTypesRegistrySvce);
    // console.log( "typeof aModule_OverriderType= " + typeof aModule_OverriderType);

    var aOverriderType_title = "Overrider-Title-test"

    var anOverrider = new aModule_OverriderType.Overrider_Constructor( aOverriderType_title);
    // console.log( "typeof anOverrider= " + typeof anOverrider);
    // console.log( "anOverrider keys = " + Object.keys( anOverrider));





    var aModule_IdentifierTypeFactory = ModuleFactory_IdentifierType();
    // console.log( "typeof aModule_IdentifierTypeFactory= " + typeof aModule_IdentifierTypeFactory);


    var aModule_IdentifierType = aModule_IdentifierTypeFactory( aTypesRegistrySvce, anOverrider);
    // console.log( "typeof aModule_IdentifierType= " + typeof aModule_IdentifierType);

    var aIdentifierType_title = "Identifier-Title-test"

    var anIdentifier = new aModule_IdentifierType.Identifier_Constructor( aIdentifierType_title);
    // console.log( "typeof anIdentifier= " + typeof anIdentifier);
    // console.log( "anIdentifier keys = " + Object.keys( anIdentifier));




    var aModule_RecordTypeFactory = ModuleFactory_RecordType();
    // console.log( "typeof aModule_RecordTypeFactory= " + typeof aModule_RecordTypeFactory);


    var aModule_RecordType = aModule_RecordTypeFactory( aTypesRegistrySvce, anOverrider);
    // console.log( "typeof aModule_RecordType= " + typeof aModule_RecordType);



    var aModule_RecorderTypeFactory = ModuleFactory_RecorderType();
    // console.log( "typeof aModule_RecorderTypeFactory= " + typeof aModule_RecorderTypeFactory);


    var aModule_RecorderType = aModule_RecorderTypeFactory(
        aTypesRegistrySvce,
        anOverrider,
        anIdentifier,
        aModule_IdentifierType,
        aModule_RecordType
    );
    // console.log( "typeof aModule_RecorderType= " + typeof aModule_RecorderType);

    var aRecorderType_title = "Recorder-Title-test"

    var aRecorder = new aModule_RecorderType.Recorder_Constructor( aRecorderType_title);
    // console.log( "typeof aRecorder= " + typeof aRecorder);
    // console.log( "aRecorder keys = " + Object.keys( aRecorder));




    var aModule_CommonTypeFactory = ModuleFactory_CommonType();
    // console.log( "typeof aModule_CommonTypeFactory= " + typeof aModule_CommonTypeFactory);


    var aModule_CommonType = aModule_CommonTypeFactory(
        aTypesRegistrySvce,
        anOverrider,
        anIdentifier,
        aRecorder
    );
    // console.log( "typeof aModule_CommonType= " + typeof aModule_CommonType);

    var aCommonType_title = "Common-Title-test"

    var aCommon = new aModule_CommonType.Common_Constructor( aCommonType_title);
    // console.log( "typeof aCommon= " + typeof aCommon);
    // console.log( "aCommon keys = " + Object.keys( aCommon));







    it("Has fRecord defined", function () {
        expect( aCommon.fRecord).not.toBeUndefined();
    });

    it("Has fRecord typeof function", function () {
        expect( typeof aCommon.fRecord).toBe( "function");
    });



    var aBeforeRecordMillis = new Date().getMilliseconds();

    var aMethodName = "common_type_record_test__theMethodName";
    var anEventKind = "common_type_record_test__theEventKind";
    var aData       = "common_type_record_test__theData";
    var aReason     = "common_type_record_test__theReason";
    var aDetail     = "common_type_record_test__theDetail";


    var aRecord = aCommon.fRecord( aMethodName, anEventKind, aData, aReason, aDetail);

    it("Has fRecord() defined", function () {
        expect( aRecord).not.toBeUndefined();
    });

    it("Has fRecord() not null", function () {
        expect( aRecord).not.toBeNull();
    });

    it("Has fRecord() object", function () {
        expect( typeof aRecord).toBe( "object");
    });

    it("Has fRecord() _v_Timestamp number", function () {
        expect( typeof aRecord._v_Timestamp).toBe( "number");
    });

    it("Has fRecord() _v_Timestamp after", function () {
        expect( aRecord._v_Timestamp >= aBeforeRecordMillis).toBe( true);
    });

    it("Has fRecord() _v_RecordId not null", function () {
        expect( aRecord._v_RecordId).not.toBeNull();
    });

    it("Has fRecord() _v_Instance self", function () {
        expect( aRecord._v_Instance).toBe( aCommon);
    });

    it("Has fRecord() _v_Step supplied", function () {
        expect( aRecord._v_Step).toBe( aMethodName);
    });

    it("Has fRecord() _v_EventKind supplied", function () {
        expect( aRecord._v_EventKind).toBe( anEventKind);
    });

    it("Has fRecord() _v_Data supplied", function () {
        expect( aRecord._v_Data).toBe( aData);
    });

    it("Has fRecord() _v_Reason supplied", function () {
        expect( aRecord._v_Reason).toBe( aReason);
    });

    it("Has fRecord() _v_Detail supplied", function () {
        expect( aRecord._v_Detail).toBe( aDetail);
    });



    var otherRecord = aCommon.fRecord( aMethodName, anEventKind, aData, aReason, aDetail);

    it("Has other fRecord() defined", function () {
        expect( otherRecord).not.toBeUndefined();
    });

    it("Has other fRecord() not null", function () {
        expect( otherRecord).not.toBeNull();
    });

    it("Has other fRecord() _v_RecordId not null", function () {
        expect( otherRecord._v_RecordId).not.toBeNull();
    });

    it("Has other fRecord() _v_RecordId > first fRecord() _v_RecordId not null", function () {
        expect( otherRecord._v_RecordId > aRecord._v_RecordId).not.toBeNull();
    });



    it("Has pLogRecord defined", function () {
        expect( aCommon.pLogRecord).not.toBeUndefined();
    });

    it("Has pLogRecord typeof function", function () {
        expect( typeof aCommon.pLogRecord).toBe( "function");
    });




});



