/*
 * common_svce_type-structural-test.js
 *
 * Created @author Antonio Carrasco Valero 201601250130
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







/// <reference path="src/common/common_svce_type.js"/>
"use strict";




describe("prettytype CommonSvce structural tests", function () {


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




    var aModule_DumpingPolicyTypeFactory = ModuleFactory_DumpingPolicyType();
    // console.log( "typeof aModule_DumpingPolicyTypeFactory= " + typeof aModule_DumpingPolicyTypeFactory);


    var aModule_DumpingPolicyType = aModule_DumpingPolicyTypeFactory( aTypesRegistrySvce, anOverrider, anIdentifier, aModule_ConsoleSvce);
    // console.log( "typeof aModule_DumpingPolicyType= " + typeof aModule_DumpingPolicyType);



    var aModule_CommonEventKindsFactory = ModuleFactory_CommonEventKinds();
    // console.log( "typeof aModule_CommonEventKindsFactory= " + typeof aModule_CommonEventKindsFactory);

    var aModule_CommonEventKinds = aModule_CommonEventKindsFactory( aTypesRegistrySvce);
    // console.log( "typeof aModule_CommonEventKinds= " + typeof aModule_CommonEventKinds);

    var aModule_DumpingPolicyFilterKindsTypeFactory = ModuleFactory_DumpingPolicyFilterKindsType();
    // console.log( "typeof aModule_DumpingPolicyFilterKindsTypeFactory= " + typeof aModule_DumpingPolicyFilterKindsTypeFactory);


    var aModule_DumpingPolicyFilterKindsType = aModule_DumpingPolicyFilterKindsTypeFactory( aTypesRegistrySvce, anOverrider, aModule_DumpingPolicyType, aModule_CommonEventKinds);
    // console.log( "typeof aModule_DumpingPolicyFilterKindsType= " + typeof aModule_DumpingPolicyFilterKindsType);


    var aModule_RecorderTypeFactory = ModuleFactory_RecorderType();
    // console.log( "typeof aModule_RecorderTypeFactory= " + typeof aModule_RecorderTypeFactory);


    var aModule_RecorderType = aModule_RecorderTypeFactory(
        aTypesRegistrySvce,
        anOverrider,
        anIdentifier,
        aModule_IdentifierType,
        aModule_RecordType,
        aModule_RecordingPolicyKeepAllType,
        aModule_DumpingPolicyFilterKindsType

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
        aRecorder,
        aModule_CommonEventKinds
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






    var aModule_CommonSvceTypeFactory = ModuleFactory_CommonSvceType();
    // console.log( "typeof aModule_CommonSvceTypeFactory= " + typeof aModule_CommonSvceTypeFactory);


    var aModule_CommonSvceType = aModule_CommonSvceTypeFactory(
        aTypesRegistrySvce,
        anOverrider,
        aModule_WithProminstrType,
        anAppBaseURLSvce,
        anAPIBaseURLSvce
    );
    // console.log( "typeof aModule_CommonSvceType= " + typeof aModule_CommonSvceType);

    var aCommonSvce_title = "CommonSvce-Title-test";

    var aCommonSvce = new aModule_CommonSvceType.CommonSvce_Constructor(
        aCommonSvce_title,
        anIdentifier,
        aRecorder
    );
    // console.log( "typeof aCommonSvce= " + typeof aCommonSvce);
    // console.log( "aCommonSvce keys = " + Object.keys( aCommonSvce));





    it("Has module defined", function () {
        expect( aCommonSvce._v_Module).not.toBeUndefined();
    });

    it("Has module not null", function () {
        expect( aCommonSvce._v_Module).not.toBeNull( null);
    });

    it("Has module ModuleName common_svce_type", function () {
        expect( aCommonSvce._v_Module.ModuleName).toBe( "common_svce_type");
    });

    it("Has module ModulePackages common", function () {
        expect( aCommonSvce._v_Module.ModulePackages).toBe( "common");
    });

    it("Has module ModuleFullName common.commonctrl", function () {
        expect( aCommonSvce._v_Module.ModuleFullName).toBe( "common/common_svce_type");
    });

    it("Has module CommonSvce_Prototype defined", function () {
        expect( aCommonSvce._v_Module.CommonSvce_Prototype).not.toBeUndefined();
    });

    it("Has module CommonSvce_Prototype not null", function () {
        expect( aCommonSvce._v_Module.CommonSvce_Prototype).not.toBeNull( null);
    });

    it("Has module CommonSvce_Constructor defined", function () {
        expect( aCommonSvce._v_Module.CommonSvce_Constructor).not.toBeUndefined();
    });

    it("Has module CommonSvce_Constructor not null", function () {
        expect( aCommonSvce._v_Module.CommonSvce_Constructor).not.toBeNull( null);
    });

    it("Has module CommonSvce_SuperPrototypeConstructor defined", function () {
        expect( aCommonSvce._v_Module.CommonSvce_SuperPrototypeConstructor).not.toBeUndefined();
    });

    it("Has module CommonSvce_SuperPrototypeConstructor not null", function () {
        expect( aCommonSvce._v_Module.CommonSvce_SuperPrototypeConstructor).not.toBeNull( null);
    });



    it("Has _v_Prototype defined", function () {
        expect( aCommonSvce._v_Prototype).not.toBeUndefined();
    });

    it("Has _v_Prototype module CommonSvce_Prototype", function () {
        expect( aCommonSvce._v_Prototype).toBe( aCommonSvce._v_Module.CommonSvce_Prototype);
    });

    it("Has _v_Prototype_CommonSvce defined", function () {
        expect( aCommonSvce._v_Prototype_CommonSvce).not.toBeUndefined();
    });

    it("Has _v_Prototype_CommonSvce module CommonSvce_Prototype", function () {
        expect( aCommonSvce._v_Prototype).toBe( aCommonSvce._v_Module.CommonSvce_Prototype);
    });



    it("Has _v_Type CommonSvce", function () {
        expect( aCommonSvce._v_Type).toBe( "CommonSvce");
    });

    it("Has title CommonSvce_DefaultName", function () {
        expect( aCommonSvce._v_Title).toBe( aCommonSvce_title);
    });



    it("Has fFullTypeNameString defined", function () {
        expect( aCommonSvce.fFullTypeNameString).not.toBeUndefined();
    });

    it("Has fFullTypeNameString typeof function", function () {
        expect( typeof aCommonSvce.fFullTypeNameString).toBe( "function");
    });





    it("Has fIdentifyingJSON defined", function () {
        expect( aCommonSvce.fIdentifyingJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingJSON typeof function", function () {
        expect( typeof aCommonSvce.fIdentifyingJSON).toBe( "function");
    });

    it("Has fIdentifyingJSON() not null", function () {
        expect( aCommonSvce.fIdentifyingJSON()).not.toBeNull();
    });

    it("Has fIdentifyingJSON() type _v_Type", function () {
        expect( aCommonSvce.fIdentifyingJSON().type).toBe( aCommonSvce._v_Type);
    });

    it("Has fIdentifyingJSON() id _v_Id", function () {
        expect( aCommonSvce.fIdentifyingJSON().id).toBe( aCommonSvce._v_Id);
    });




    it("Has fIdentifyingString defined", function () {
        expect( aCommonSvce.fIdentifyingString).not.toBeUndefined();
    });

    it("Has fIdentifyingString typeof function", function () {
        expect( typeof aCommonSvce.fIdentifyingString).toBe( "function");
    });

    it("Has fIdentifyingString() not null", function () {
        expect( aCommonSvce.fIdentifyingString()).not.toBeNull();
    });

    it("Has fIdentifyingString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aCommonSvce.fIdentifyingString()).toBe( JSON.stringify( aCommonSvce.fIdentifyingJSON()));
    });





    it("Has fIdentifyingWithTitleJSON defined", function () {
        expect( aCommonSvce.fIdentifyingWithTitleJSON).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleJSON typeof function", function () {
        expect( typeof aCommonSvce.fIdentifyingWithTitleJSON).toBe( "function");
    });

    it("Has fIdentifyingWithTitleJSON() not null", function () {
        expect( aCommonSvce.fIdentifyingWithTitleJSON()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleJSON() type _v_Type", function () {
        expect( aCommonSvce.fIdentifyingWithTitleJSON().type).toBe( aCommonSvce._v_Type);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Id", function () {
        expect( aCommonSvce.fIdentifyingWithTitleJSON().id).toBe( aCommonSvce._v_Id);
    });

    it("Has fIdentifyingWithTitleJSON() id _v_Title", function () {
        expect( aCommonSvce.fIdentifyingWithTitleJSON().title).toBe( aCommonSvce._v_Title);
    });






    it("Has fIdentifyingWithTitleString defined", function () {
        expect( aCommonSvce.fIdentifyingWithTitleString).not.toBeUndefined();
    });

    it("Has fIdentifyingWithTitleString typeof function", function () {
        expect( typeof aCommonSvce.fIdentifyingWithTitleString).toBe( "function");
    });

    it("Has fIdentifyingWithTitleString() not null", function () {
        expect( aCommonSvce.fIdentifyingWithTitleString()).not.toBeNull();
    });

    it("Has fIdentifyingWithTitleString() JSON.stringify( fIdentifyingJSON())", function () {
        expect( aCommonSvce.fIdentifyingWithTitleString()).toBe( JSON.stringify( aCommonSvce.fIdentifyingWithTitleJSON()));
    });




    it("Has fToResultJSON defined", function () {
        expect( aCommonSvce.fToResultJSON).not.toBeUndefined();
    });

    it("Has fToResultJSON typeof function", function () {
        expect( typeof aCommonSvce.fToResultJSON).toBe( "function");
    });

    it("Has fToResultJSON() not null", function () {
        expect( aCommonSvce.fToResultJSON()).not.toBeNull();
    });


    it("Has fToResultJSON() type _v_Type", function () {
        expect( aCommonSvce.fToResultJSON().type).toBe( aCommonSvce._v_Type);
    });

    it("Has fToResultJSON() id _v_Id", function () {
        expect( aCommonSvce.fToResultJSON().id).toBe( aCommonSvce._v_Id);
    });

    it("Has fToResultJSON() id _v_Title", function () {
        expect( aCommonSvce.fToResultJSON().title).toBe( aCommonSvce._v_Title);
    });






    var someCommonSvceMethodNames = [
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


    var aNumCommonSvceMethodNames = someCommonSvceMethodNames.length;
    for( var aCommonSvceMethodNameIdx=0; aCommonSvceMethodNameIdx < aNumCommonSvceMethodNames; aCommonSvceMethodNameIdx++) {
        var aCommonSvceMethodName = someCommonSvceMethodNames[ aCommonSvceMethodNameIdx];
        if( aCommonSvceMethodName) {

            (function() {

                var aCommonSvceMethodName_here = aCommonSvceMethodName;

                it("Has " + aCommonSvceMethodName_here + " defined", function () {
                    expect( aCommonSvce[ aCommonSvceMethodName_here]).not.toBeUndefined();
                });

                it("Has " + aCommonSvceMethodName_here + " typeof function", function () {
                    expect( typeof aCommonSvce[ aCommonSvceMethodName_here]).toBe( "function");
                })
            })();
        }
    }



});


