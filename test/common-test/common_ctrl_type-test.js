/*
 * common_ctrl_type.js
 *
 * Created @author Antonio Carrasco Valero 201601250103
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





/// <reference path="src/common/common_ctrl_type.js"/>
"use strict";




describe("prettytype CommonCtrl tests", function () {


    var aModule_TypesRegistrySvceFactory = ModuleFactory_TypesRegistrySvce();
    // console.log( "typeof aModule_TypesRegistrySvceFactory= " + typeof aModule_TypesRegistrySvceFactory);

    var aTypesRegistrySvce = aModule_TypesRegistrySvceFactory();
    // console.log( "typeof aTypesRegistrySvce= " + typeof aTypesRegistrySvce);
    // console.log( "aTypesRegistrySvce keys = " + Object.keys( aTypesRegistrySvce));




    var aModule_OverriderTypeFactory = ModuleFactory_OverriderType();
    // console.log( "typeof aModule_OverriderTypeFactory= " + typeof aModule_OverriderTypeFactory);

    var aModule_OverriderType = aModule_OverriderTypeFactory( aTypesRegistrySvce);
    // console.log( "typeof aModule_OverriderType= " + typeof aModule_OverriderType);

    var aOverrider_title = "Overrider-Title-test";

    var anOverrider = new aModule_OverriderType.Overrider_Constructor( aOverrider_title);
    // console.log( "typeof anOverrider= " + typeof anOverrider);
    // console.log( "anOverrider keys = " + Object.keys( anOverrider));





    var aModule_IdentifierTypeFactory = ModuleFactory_IdentifierType();
    // console.log( "typeof aModule_IdentifierTypeFactory= " + typeof aModule_IdentifierTypeFactory);

    var aModule_IdentifierType = aModule_IdentifierTypeFactory( aTypesRegistrySvce, anOverrider);
    // console.log( "typeof aModule_IdentifierType= " + typeof aModule_IdentifierType);

    var aIdentifier_title = "Identifier-Title-test";

    var anIdentifier = new aModule_IdentifierType.Identifier_Constructor( aIdentifier_title);
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

    var aRecorder_title = "Recorder-Title-test";

    var aRecorder = new aModule_RecorderType.Recorder_Constructor(
        aRecorder_title,
        anIdentifier
    );
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





    var aModule_QngMockFactory = ModuleFactory_QngMock();
    // console.log( "typeof aModule_QngMockFactory= " + typeof aModule_QngMockFactory);

    var aModule_QngMock = aModule_QngMockFactory();
    // console.log( "typeof aModule_QngMock= " + typeof aModule_QngMock);

    var aQngMock = new aModule_QngMock.QngMock_Constructor();
    // console.log( "typeof aQngMock= " + typeof aQngMock);
    // console.log( "aQngMock keys = " + Object.keys( aQngMock));





    var aModule_ProminstrTypeFactory = ModuleFactory_ProminstrType();
    // console.log( "typeof aModule_ProminstrTypeFactory= " + typeof aModule_ProminstrTypeFactory);


    var aModule_ProminstrType = aModule_ProminstrTypeFactory(
        aTypesRegistrySvce,
        anOverrider,
        aModule_CommonType,
        aModule_IdentifierType,
        aQngMock
    );
    // console.log( "typeof aModule_ProminstrType= " + typeof aModule_ProminstrType);

    var aProminstr_title = "Prominstr-Title-test";

    var aProminstr = new aModule_ProminstrType.Prominstr_Constructor(
        aProminstr_title,
        anIdentifier,
        aRecorder
    );
    // console.log( "typeof aProminstr= " + typeof aProminstr);
    // console.log( "aProminstr keys = " + Object.keys( aProminstr));








    var aModule_WithProminstrTypeFactory = ModuleFactory_WithProminstrType();
    // console.log( "typeof aModule_WithProminstrTypeFactory= " + typeof aModule_WithProminstrTypeFactory);


    var aModule_WithProminstrType = aModule_WithProminstrTypeFactory(
        aTypesRegistrySvce,
        anOverrider,
        aModule_CommonType,
        aProminstr
    );
    // console.log( "typeof aModule_WithProminstrType= " + typeof aModule_WithProminstrType);


    
    
    
    
    

    var aModule_AppBaseURLFactory = ModuleFactory_AppBaseURLMock();
    // console.log( "typeof aModule_AppBaseURLFactory= " + typeof aModule_AppBaseURLFactory);


    var aModule_AppBaseURL = aModule_AppBaseURLFactory(
        aTypesRegistrySvce,
        anOverrider,
        aModule_CommonType,
        aModule_IdentifierType,
        aQngMock
    );
    // console.log( "typeof aModule_AppBaseURL= " + typeof aModule_AppBaseURL);

    var aAppBaseURL_title = "Prominstr-Title-test";

    var anAppBaseURLSvce = new aModule_AppBaseURL.AppBaseURLMock_Constructor( aAppBaseURL_title);
    // console.log( "typeof anAppBaseURLSvce= " + typeof anAppBaseURLSvce);
    // console.log( "anAppBaseURLSvce keys = " + Object.keys( anAppBaseURLSvce));





    var aModule_APIBaseURLFactory = ModuleFactory_APIBaseURLMock();
    // console.log( "typeof aModule_APIBaseURLFactory= " + typeof aModule_APIBaseURLFactory);


    var aModule_APIBaseURL = aModule_APIBaseURLFactory(
        aTypesRegistrySvce,
        anOverrider,
        aModule_CommonType,
        aModule_IdentifierType,
        aQngMock
    );
    // console.log( "typeof aModule_APIBaseURL= " + typeof aModule_APIBaseURL);

    var aAPIBaseURL_title = "Prominstr-Title-test";

    var anAPIBaseURLSvce = new aModule_APIBaseURL.APIBaseURLMock_Constructor( aAPIBaseURL_title);
    // console.log( "typeof anAPIBaseURLSvce= " + typeof anAPIBaseURLSvce);
    // console.log( "anAPIBaseURLSvce keys = " + Object.keys( anAPIBaseURLSvce));





    var aModule_LocationngMockFactory = ModuleFactory_QngMock();
    // console.log( "typeof aModule_LocationngMockFactory= " + typeof aModule_LocationngMockFactory);

    var aModule_LocationngMock = aModule_LocationngMockFactory();
    // console.log( "typeof aModule_LocationngMock= " + typeof aModule_LocationngMock);

    var aLocationngMock = new aModule_QngMock.QngMock_Constructor();
    // console.log( "typeof aLocationngMock= " + typeof aLocationngMock);
    // console.log( "aLocationngMock keys = " + Object.keys( aLocationngMock));








    var aModule_CommonCtrlTypeFactory = ModuleFactory_CommonCtrlType();
    // console.log( "typeof aModule_CommonCtrlTypeFactory= " + typeof aModule_CommonCtrlTypeFactory);


    var aModule_CommonCtrlType = aModule_CommonCtrlTypeFactory(
        aTypesRegistrySvce,
        anOverrider,
        aModule_WithProminstrType,
        anAppBaseURLSvce,
        anAPIBaseURLSvce,
        aLocationngMock
    );
    // console.log( "typeof aModule_CommonCtrlType= " + typeof aModule_CommonCtrlType);

    var aCommonCtrl_title = "CommonCtrl-Title-test";

    var aCommonCtrl = new aModule_CommonCtrlType.CommonCtrl_Constructor(
        aCommonCtrl_title,
        anIdentifier,
        aRecorder);
    // console.log( "typeof aCommonCtrl= " + typeof aCommonCtrl);
    // console.log( "aCommonCtrl keys = " + Object.keys( aCommonCtrl));





    it("Has module defined", function () {
        expect( aCommonCtrl._v_Module).not.toBeUndefined();
    });

    it("Has module not null", function () {
        expect( aCommonCtrl._v_Module).not.toBeNull( null);
    });

    it("Has module ModuleName common_ctrl_type", function () {
        expect( aCommonCtrl._v_Module.ModuleName).toBe( "common_ctrl_type");
    });

    it("Has module ModulePackages common", function () {
        expect( aCommonCtrl._v_Module.ModulePackages).toBe( "common");
    });

    it("Has module ModuleFullName common.commonctrl", function () {
        expect( aCommonCtrl._v_Module.ModuleFullName).toBe( "common/common_ctrl_type");
    });

    it("Has module CommonCtrl_Prototype defined", function () {
        expect( aCommonCtrl._v_Module.CommonCtrl_Prototype).not.toBeUndefined();
    });

    it("Has module CommonCtrl_Prototype not null", function () {
        expect( aCommonCtrl._v_Module.CommonCtrl_Prototype).not.toBeNull( null);
    });

    it("Has module CommonCtrl_Constructor defined", function () {
        expect( aCommonCtrl._v_Module.CommonCtrl_Constructor).not.toBeUndefined();
    });

    it("Has module CommonCtrl_Constructor not null", function () {
        expect( aCommonCtrl._v_Module.CommonCtrl_Constructor).not.toBeNull( null);
    });

    it("Has module CommonCtrl_SuperPrototypeConstructor defined", function () {
        expect( aCommonCtrl._v_Module.CommonCtrl_SuperPrototypeConstructor).not.toBeUndefined();
    });

    it("Has module CommonCtrl_SuperPrototypeConstructor not null", function () {
        expect( aCommonCtrl._v_Module.CommonCtrl_SuperPrototypeConstructor).not.toBeNull( null);
    });



    it("Has _v_Prototype defined", function () {
        expect( aCommonCtrl._v_Prototype).not.toBeUndefined();
    });

    it("Has _v_Prototype module CommonCtrl_Prototype", function () {
        expect( aCommonCtrl._v_Prototype).toBe( aCommonCtrl._v_Module.CommonCtrl_Prototype);
    });

    it("Has _v_Prototype_CommonCtrl defined", function () {
        expect( aCommonCtrl._v_Prototype_CommonCtrl).not.toBeUndefined();
    });

    it("Has _v_Prototype_CommonCtrl module CommonCtrl_Prototype", function () {
        expect( aCommonCtrl._v_Prototype).toBe( aCommonCtrl._v_Module.CommonCtrl_Prototype);
    });



    it("Has _v_Type CommonCtrl", function () {
        expect( aCommonCtrl._v_Type).toBe( "CommonCtrl");
    });

    it("Has title CommonCtrl_DefaultName", function () {
        expect( aCommonCtrl._v_Title).toBe( aCommonCtrl_title);
    });



    it("Has fFullTypeNameString defined", function () {
        expect( aCommonCtrl.fFullTypeNameString).not.toBeUndefined();
    });

    it("Has fFullTypeNameString typeof function", function () {
        expect( typeof aCommonCtrl.fFullTypeNameString).toBe( "function");
    });





    it("Has fIdentifyingJSON defined", function () {
        expect( aCommonCtrl.fIdentifyingJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingJSON typeof function", function () {
        expect( typeof aCommonCtrl.fIdentifyingJSON).toBe( "function");
    });

    it("Has fIdentifyingJSON() not null", function () {
        expect( aCommonCtrl.fIdentifyingJSON()).not.toBeNull();
    });

    it("Has fIdentifyingJSON() type _v_Type", function () {
        expect( aCommonCtrl.fIdentifyingJSON().type).toBe( aCommonCtrl._v_Type);
    });

    it("Has fIdentifyingJSON() id _v_Id", function () {
        expect( aCommonCtrl.fIdentifyingJSON().id).toBe( aCommonCtrl._v_Id);
    });




    it("Has fIdentifyingString defined", function () {
        expect( aCommonCtrl.fIdentifyingString).not.toBeUndefined();
    });

    it("Has fIdentifyingString typeof function", function () {
        expect( typeof aCommonCtrl.fIdentifyingString).toBe( "function");
    });

    it("Has fIdentifyingString() not null", function () {
        expect( aCommonCtrl.fIdentifyingString()).not.toBeNull();
    });

    it("Has fIdentifyingString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aCommonCtrl.fIdentifyingString()).toBe( JSON.stringify( aCommonCtrl.fIdentifyingJSON()));
    });





    it("Has fIdentifyingWithTitleJSON defined", function () {
        expect( aCommonCtrl.fIdentifyingWithTitleJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleJSON typeof function", function () {
        expect( typeof aCommonCtrl.fIdentifyingWithTitleJSON).toBe( "function");
    });

    it("Has fIdentifyingWithTitleJSON() not null", function () {
        expect( aCommonCtrl.fIdentifyingWithTitleJSON()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleJSON() type _v_Type", function () {
        expect( aCommonCtrl.fIdentifyingWithTitleJSON().type).toBe( aCommonCtrl._v_Type);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Id", function () {
        expect( aCommonCtrl.fIdentifyingWithTitleJSON().id).toBe( aCommonCtrl._v_Id);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Title", function () {
        expect( aCommonCtrl.fIdentifyingWithTitleJSON().title).toBe( aCommonCtrl._v_Title);
    });






    it("Has fIdentifyingWithTitleString defined", function () {
        expect( aCommonCtrl.fIdentifyingWithTitleString).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleString typeof function", function () {
        expect( typeof aCommonCtrl.fIdentifyingWithTitleString).toBe( "function");
    });

    it("Has fIdentifyingWithTitleString() not null", function () {
        expect( aCommonCtrl.fIdentifyingWithTitleString()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aCommonCtrl.fIdentifyingWithTitleString()).toBe( JSON.stringify( aCommonCtrl.fIdentifyingWithTitleJSON()));
    });




    it("Has fToResultJSON defined", function () {
        expect( aCommonCtrl.fToResultJSON).not.toBeUndefined();
    });

    it("Has fToResultJSON typeof function", function () {
        expect( typeof aCommonCtrl.fToResultJSON).toBe( "function");
    });

    it("Has fToResultJSON() not null", function () {
        expect( aCommonCtrl.fToResultJSON()).not.toBeNull();
    });


    it("Has fToResultJSON() type _v_Type", function () {
        expect( aCommonCtrl.fToResultJSON().type).toBe( aCommonCtrl._v_Type);
    });

    it("Has fToResultJSON() id _v_Id", function () {
        expect( aCommonCtrl.fToResultJSON().id).toBe( aCommonCtrl._v_Id);
    });

    it("Has fToResultJSON() id _v_Title", function () {
        expect( aCommonCtrl.fToResultJSON().title).toBe( aCommonCtrl._v_Title);
    });






    var someCommonCtrlMethodNames = [
        "fNewDeferred",
        "fNewDeferredResolvePromise",
        "pDeferredResolve",
        "fNewDeferredResolveWithNothingPromise",
        "pDeferredResolveWithNothing",
        "fNewDeferredResolveWithSomethingPromise",
        "pDeferredResolveWithSomething",
        "fNewDeferredResolveWithNullPromise",
        "pDeferredResolveWithNull",
        "fNewDeferredResolveWithResponsePromise",
        "pDeferredResolveWithResponse",
        "fNewDeferredResolveWithRowsPromise",
        "pDeferredResolveWithRows",
        "fNewDeferredResolveWithFieldsPromise",
        "pDeferredResolveWithFields",
        "fNewDeferredResolveWithSelectionIndexPromise",
        "pDeferredResolveWithSelectionIndex",
        "fNewDeferredResolveWhenInDoubtPromise",
        "pDeferredResolveWhenInDoubt",
        "fNewPromiseAll",
        "fNewDeferredRejectPromise",
        "pDeferredReject",
        "fNewDeferredResolveAjaxResponsePromise",
        "pDeferredResolveAjaxResponse",
        "fNewDeferredRejectAjaxErrorPromise",
        "pDeferredRejectAjaxError",
        "fNewDeferredRejectActionErrorPromise",
        "pDeferredRejectActionError"
    ];


    var aNumCommonCtrlMethodNames = someCommonCtrlMethodNames.length;
    for( var aCommonCtrlMethodNameIdx=0; aCommonCtrlMethodNameIdx < aNumCommonCtrlMethodNames; aCommonCtrlMethodNameIdx++) {
        var aCommonCtrlMethodName = someCommonCtrlMethodNames[ aCommonCtrlMethodNameIdx];
        if( aCommonCtrlMethodName) {

            (function() {

                var aCommonCtrlMethodName_here = aCommonCtrlMethodName;

                it("Has " + aCommonCtrlMethodName_here + " defined", function () {
                    expect( aCommonCtrl[ aCommonCtrlMethodName_here]).not.toBeUndefined();
                });

                it("Has " + aCommonCtrlMethodName_here + " typeof function", function () {
                    expect( typeof aCommonCtrl[ aCommonCtrlMethodName_here]).toBe( "function");
                })
            })();
        }
    }



});

