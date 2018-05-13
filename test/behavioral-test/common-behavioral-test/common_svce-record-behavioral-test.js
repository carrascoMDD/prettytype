/*
 * common_svce-record-behavioral-test.js
 *
 * Created @author Antonio Carrasco Valero 201610131914
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







/// <reference path="src/common/common_svce.js"/>
"use strict";




describe("prettytypes-ng CommonSvce record behavioral tests", function () {




    beforeEach( module( "typesRegistry", "rootsTypes", "identifyingTypes", "commonTypes", "baseURLs"));


    var aBeforeRecordMillis = new Date().getMilliseconds();


    var aMethodName = "common_type_record_test__theMethodName";
    var anEventKind = "common_type_record_test__theEventKind";
    var aData       = "common_type_record_test__theData";
    var aReason     = "common_type_record_test__theReason";
    var aDetail     = "common_type_record_test__theDetail";



    var aMethodName2 = "common_type_record_test__theMethodName2";
    var anEventKind2 = "common_type_record_test__theEventKind2";
    var aData2       = "common_type_record_test__theData2";
    var aReason2     = "common_type_record_test__theReason2";
    var aDetail2     = "common_type_record_test__theDetail2";




    var aCommonSvce    = null;

    var aRecord = null;
    var otherRecord = null;


    beforeEach( inject(function( _CommonSvce_) {

        // console.log( "typeof _CommonSvceType_= " + typeof _CommonSvceType_);
        // console.log( "anIdentifier _CommonSvceType_ = " + Object.keys( _CommonSvceType_));

        aCommonSvce = _CommonSvce_;
        // console.log( "typeof aCommon= " + typeof aCommon);
        // console.log( "aCommon keys = " + Object.keys( aCommon));

        aRecord     = aCommonSvce.fRecord( aMethodName, anEventKind, aData, aReason, aDetail);

        otherRecord = aCommonSvce.fRecord( aMethodName2, anEventKind2, aData2, aReason2, aDetail2);

    }));







    it("Has fRecord defined typeof function and Structure of one Record and other Record", function () {

        expect( aCommonSvce.fRecord).not.toBeUndefined();
        expect( typeof aCommonSvce.fRecord).toBe( "function");


        expect( aRecord).not.toBeUndefined();
        expect( aRecord).not.toBeNull();
        expect( typeof aRecord).toBe( "object");
        expect( typeof aRecord._v_Timestamp).toBe( "number");
        expect( aRecord._v_Timestamp >= aBeforeRecordMillis).toBe( true);
        expect( aRecord._v_RecordId).not.toBeNull();
        expect( aRecord._v_Instance).toBe( aCommonSvce);
        expect( aRecord._v_Step).toBe( aMethodName);
        expect( aRecord._v_EventKind).toBe( anEventKind);
        expect( aRecord._v_Data).toBe( aData);
        expect( aRecord._v_Reason).toBe( aReason);
        expect( aRecord._v_Detail).toBe( aDetail);

        expect( otherRecord).not.toBeUndefined();
        expect( otherRecord).not.toBeNull();
        expect( otherRecord._v_RecordId).not.toBeNull();
        expect( otherRecord._v_RecordId > aRecord._v_RecordId).not.toBeNull();
        expect( otherRecord._v_Instance).toBe( aCommonSvce);
        expect( otherRecord._v_Step).toBe( aMethodName2);
        expect( otherRecord._v_EventKind).toBe( anEventKind2);
        expect( otherRecord._v_Data).toBe( aData2);
        expect( otherRecord._v_Reason).toBe( aReason2);
        expect( otherRecord._v_Detail).toBe( aDetail2);
    });



});


