/*
 * common_type-misc-test.js
 *
 * Created @author Antonio Carrasco Valero 201601241650
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




describe("prettytype Common misc tests", function () {

    var aModule_TypesRegistrySvceFactory = ModuleFactory_TypesRegistrySvce();
    // console.log( "typeof aModule_TypesRegistrySvceFactory= " + typeof aModule_TypesRegistrySvceFactory);

    var aTypesRegistrySvce = aModule_TypesRegistrySvceFactory();
    // console.log( "typeof aTypesRegistrySvce= " + typeof aTypesRegistrySvce);
    // console.log( "aTypesRegistrySvce keys = " + Object.keys( aTypesRegistrySvce));


    var aModule_OverriderTypeFactory = ModuleFactory_OverriderType();
    // console.log( "typeof aModule_OverriderTypeFactory= " + typeof aModule_OverriderTypeFactory);


    var aModule_OverriderType = aModule_OverriderTypeFactory( aTypesRegistrySvce);
    // console.log( "typeof aModule_OverriderType= " + typeof aModule_OverriderType);

    var aOverrider_title = "Overrider-Title-test"

    var anOverrider = new aModule_OverriderType.Overrider_Constructor( aOverrider_title);
    // console.log( "typeof anOverrider= " + typeof anOverrider);
    // console.log( "anOverrider keys = " + Object.keys( anOverrider));





    var aModule_IdentifierTypeFactory = ModuleFactory_IdentifierType();
    // console.log( "typeof aModule_IdentifierTypeFactory= " + typeof aModule_IdentifierTypeFactory);


    var aModule_IdentifierType = aModule_IdentifierTypeFactory( aTypesRegistrySvce, anOverrider);
    // console.log( "typeof aModule_IdentifierType= " + typeof aModule_IdentifierType);

    var aIdentifier_title = "Identifier-Title-test"

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

    var aRecorder_title = "Recorder-Title-test"

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

    var aCommon_title = "Common-Title-test"

    var aCommon = new aModule_CommonType.Common_Constructor(
        aCommon_title,
        anIdentifier,
        aRecorder
    );    // console.log( "typeof aCommon= " + typeof aCommon);
    // console.log( "aCommon keys = " + Object.keys( aCommon));







    it("Has fFirstDiff defined", function () {
        expect( aCommon.fFirstDiff).not.toBeUndefined();
    });

    it("Has fFirstDiff typeof function", function () {
        expect( typeof aCommon.fFirstDiff).toBe( "function");
    });


    it("fFirstDiff('','') null", function () {
        expect( aCommon.fFirstDiff( "", "")).toBeNull();
    });

    it("fFirstDiff('a','a') null", function () {
        expect( aCommon.fFirstDiff( "a", "a")).toBeNull();
    });

    it("fFirstDiff(1,1) null", function () {
        expect( aCommon.fFirstDiff( 1, 1)).toBeNull();
    });

    it("fFirstDiff(true,true) null", function () {
        expect( aCommon.fFirstDiff( true, true)).toBeNull();
    });

    it("fFirstDiff({},{}) null", function () {
        expect( aCommon.fFirstDiff( {}, {})).toBeNull();
    });

    it("fFirstDiff([],[]) null", function () {
        expect( aCommon.fFirstDiff( [], [])).toBeNull();
    });



    it("fFirstDiff('a','') null", function () {
        expect( aCommon.fFirstDiff( "a", "")).toBe( "/");
    });

    it("fFirstDiff('a','b') null", function () {
        expect( aCommon.fFirstDiff( "a", "b")).toBe( "/");
    });

    it("fFirstDiff(1,2) null", function () {
        expect( aCommon.fFirstDiff( 1, 2)).toBe( "/");
    });

    it("fFirstDiff(true,true) null", function () {
        expect( aCommon.fFirstDiff( true, false)).toBe( "/");
    });

    it("fFirstDiff({},'') null", function () {
        expect( aCommon.fFirstDiff( {}, '')).toBe( "/");
    });

    it("fFirstDiff([],'') null", function () {
        expect( aCommon.fFirstDiff( [], '')).toBe( "/");
    });




    it("fFirstDiff({'a': 'a'},{'a': 'a'}) null", function () {
        expect( aCommon.fFirstDiff( {'a': 'a'},{'a': 'a'})).toBeNull();
    });

    it("fFirstDiff({'a': 'a','b':'b'},{'a': 'a','b':'b'}) null", function () {
        expect( aCommon.fFirstDiff( {'a': 'a','b':'b'},{'a': 'a','b':'b'})).toBeNull();
    });

    it("fFirstDiff({'a': 'a','b':'b'},{'a': 'a','b':'b'}) null", function () {
        expect( aCommon.fFirstDiff( {'a': 'a','b':'b'},{'a': 'a','b':'b'})).toBeNull();
    });

    it("fFirstDiff({'a': 'a','b':'b', c: {'d': 'd','e':'e'}},{'a': 'a','b':'b', c: {'d': 'd','e':'e'}}) null", function () {
        expect( aCommon.fFirstDiff( {'a': 'a','b':'b', c: {'d': 'd','e':'e'}},{'a': 'a','b':'b', c: {'d': 'd','e':'e'}})).toBeNull();
    });

    it("fFirstDiff({'a': 'a','b':'b', c: {'d': 'd','e':'e', 'f': {'g': 'g','h':'h', i: {'j': 'j','k':'k'}}}},{'a': 'a','b':'b', c: {'d': 'd','e':'e', 'f': {'g': 'g','h':'h', i: {'j': 'j','k':'k'}}}}) null", function () {
        expect( aCommon.fFirstDiff( {'a': 'a','b':'b', c: {'d': 'd','e':'e', 'f': {'g': 'g','h':'h', i: {'j': 'j','k':'k'}}}},{'a': 'a','b':'b', c: {'d': 'd','e':'e', 'f': {'g': 'g','h':'h', i: {'j': 'j','k':'k'}}}})).toBeNull();
    });




    it("fFirstDiff({'a': 'a'},{'a': 'b'}) null", function () {
        expect( JSON.stringify( aCommon.fFirstDiff( {'a': 'a'},{'a': 'b'}))).toBe( JSON.stringify( ["a"]));
    });


    it("fFirstDiff({'a': 'a'},{'b': 'a'}) null", function () {
        expect( JSON.stringify( aCommon.fFirstDiff( {'a': 'a'},{'a': 'b'}))).toBe( JSON.stringify( ["a"]));
    });

    it("fFirstDiff({'a': 'a','b':'b'},{'a': 'a','b':'c'}) null", function () {
        expect( JSON.stringify( aCommon.fFirstDiff( {'a': 'a','b':'b'},{'a': 'a','b':'c'}))).toBe( JSON.stringify( ["b"]));
    });

    it("fFirstDiff({'a': 'a','b':'b'},{'a': 'a','c':'b'}) null", function () {
        expect( JSON.stringify( aCommon.fFirstDiff( {'a': 'a','b':'b'},{'a': 'a','b':'c'}))).toBe( JSON.stringify( ["b"]));
    });

    it("fFirstDiff({'a': 'a','b':'b', c: {'d': 'd','e':'e'}},{'a': 'a','b':'b', c: {'d': 'x','e':'e'}}) null", function () {
        expect( JSON.stringify( aCommon.fFirstDiff( {'a': 'a','b':'b', c: {'d': 'd','e':'e'}},{'a': 'a','b':'b', c: {'d': 'x','e':'e'}}))).toBe( JSON.stringify( ["c", "d"]));
    });

    it("fFirstDiff({'a': 'a','b':'b', c: {'d': 'd','e':'e', 'f': {'g': 'g','h':'h', i: {'j': 'j','k':'k'}}}},{'a': 'a','b':'b', c: {'d': 'd','e':'e', 'f': {'g': 'g','h':'h', i: {'j': 'j','k':'k'}}}}) null", function () {
        expect( JSON.stringify( aCommon.fFirstDiff( {'a': 'a','b':'b', c: {'d': 'd','e':'e', 'f': {'g': 'g','h':'h', i: {'j': 'j','k':'k'}}}},{'a': 'a','b':'b', c: {'d': 'd','e':'e', 'f': {'g': 'g','h':'h', i: {'j': 'j','k':'x'}}}}))).toBe( JSON.stringify( ["c","i","k","f"]));
    });


});



