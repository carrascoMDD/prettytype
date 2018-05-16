/*
 * traversals-fgFirstDiff-behavioral-test.js
 *
 * Created @author Antonio Carrasco Valero 201601261900
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


/// <reference path="src/common/traversals.js"/>
"use strict";


var aTest_spec = (function( theSS_traversals) {
    
    var ComponentName    = "prettytype-test";
    var ModuleName     = "traversals-behavioral-test";
    var ModulePackages = "test/behavioral-test/utils-behavioral-test";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    describe( ModuleName + " " + ModulePackages + " " + ComponentName, function () {
        
        
        var aM_traversals = null;
        
        if( ( typeof beforeEach === 'function') && ( typeof module === 'function')  && ( typeof inject === 'function')) {
            // Karma for Angular (1.x)
            beforeEach( module( 'typesRegistry', 'modbootTypes', 'traversals'));
            
            beforeEach( inject(function( _Traversals_) {
                aM_traversals = _Traversals_;
            }));
        }
        else if ( !(typeof module === 'undefined') && module.exports) {
            // Node.js
            aM_traversals = require('../../../src/utils/traversals');
        }
        else if ( !(typeof define === 'undefined') && define.amd) {
            // AMD / RequireJS
            aM_traversals = theSS_traversals;
        }
        else if ( !(typeof nomod === 'undefined') && nomod.register) {
            aM_traversals = nomod.resolve( nomod.fComputeFullName( "prettytype", "utils", "traversals"));
        }
        
        it("First Diff null '@DONOTCOMPARE699@'", function () {
            expect( aM_traversals.fgFirstDiff( null, '@DONOTCOMPARE699@')).toBeNull( );
        });
        
        it("First Diff 0 '@DONOTCOMPARE699@'", function () {
            expect( aM_traversals.fgFirstDiff( 0, '@DONOTCOMPARE699@')).toBeNull( );
        });
        
        it("First Diff '' '@DONOTCOMPARE699@'", function () {
            expect( aM_traversals.fgFirstDiff( '', '@DONOTCOMPARE699@')).toBeNull( );
        });
        
        it("First Diff function '@DONOTCOMPARE699@'", function () {
            expect( aM_traversals.fgFirstDiff( (function(){}), '@DONOTCOMPARE699@')).toBeNull( );
        });
        
        it("First Diff null null", function () {
            expect( aM_traversals.fgFirstDiff( null, null)).toBeNull();
        });
        
        it("First Diff null 0", function () {
            expect( aM_traversals.fgFirstDiff( null, 0)).toBe( "/");
        });
        
        it("First Diff 0 0", function () {
            expect( aM_traversals.fgFirstDiff( 0, 0)).toBeNull( );
        });
        
        it("First Diff 1 1", function () {
            expect( aM_traversals.fgFirstDiff( 0, 0)).toBeNull( );
        });
        
        it("First Diff null ''", function () {
            expect( aM_traversals.fgFirstDiff( null, '')).toBe( "/");
        });
        
        it("First Diff '' ''", function () {
            expect( aM_traversals.fgFirstDiff( '', '')).toBeNull( );
        });
        
        it("First Diff 'a' 'a'", function () {
            expect( aM_traversals.fgFirstDiff( 'a', 'a')).toBeNull( );
        });
        
        it("First Diff 'a' 'b'", function () {
            expect( aM_traversals.fgFirstDiff( 'a', 'b')).toBe( "/");
        });
        
        it("First Diff 'aa' 'ab'", function () {
            expect( aM_traversals.fgFirstDiff( 'a', 'b')).toBe( "/");
        });
        
        it("First Diff 0 ''", function () {
            expect( aM_traversals.fgFirstDiff( null, '')).toBe( "/");
        });
        
        it("First Diff true 0", function () {
            expect( aM_traversals.fgFirstDiff( true, 0)).toBe( "/");
        });
        
        it("First Diff false 0", function () {
            expect( aM_traversals.fgFirstDiff( false, 0)).toBe( "/");
        });
        
        it("First Diff true ''", function () {
            expect( aM_traversals.fgFirstDiff( true, '')).toBe( "/");
        });
        
        it("First Diff false ''", function () {
            expect( aM_traversals.fgFirstDiff( false, '')).toBe( "/");
        });
        
        it("First Diff function null", function () {
            expect( aM_traversals.fgFirstDiff( (function(){}), null)).toBe( "/");
        });
        
        it("First Diff function 0", function () {
            expect( aM_traversals.fgFirstDiff( (function(){}), 0)).toBe( "/");
        });
        
        it("First Diff function ''", function () {
            expect( aM_traversals.fgFirstDiff( (function(){}), '')).toBe( "/");
        });
        
        it("First Diff ['a'] ['a']", function () {
            expect( aM_traversals.fgFirstDiff( ['a'], ['a'])).toBeNull( );
        });
        
        it("First Diff ['a','b'] ['a','b']", function () {
            expect( aM_traversals.fgFirstDiff( ['a','b'], ['a','b'])).toBeNull( );
        });
        
        it("First Diff ['a'] ['b']", function () {
            expect( JSON.stringify( aM_traversals.fgFirstDiff( ['a'], ['b']))).toBe( JSON.stringify( [ 0]));
        });
        
        it("First Diff ['a','b'] ['a','c']", function () {
            expect( JSON.stringify( aM_traversals.fgFirstDiff( ['a','b'], ['a','c']))).toBe( JSON.stringify( [ 1]));
        });
        
        it("First Diff ['a','b'] ['a','b','c']", function () {
            expect( aM_traversals.fgFirstDiff( ['a','b'], ['a','b','c'])).toBe( '/');
        });
        
        
        it("First Diff {x:['a']} {y:['a']}", function () {
            expect( JSON.stringify( aM_traversals.fgFirstDiff( {x:['a']}, {y:['a']}))).toBe( JSON.stringify( [ 'x']));
        });
        
        
        it("First Diff {x:['a']} {x:['a']}", function () {
            expect( aM_traversals.fgFirstDiff( {x:['a']}, {x:['a']})).toBeNull( );
        });
        
        it("First Diff {x:['a','b'] {x:['a','b']}", function () {
            expect( aM_traversals.fgFirstDiff( {x:['a','b']}, {x:['a','b']})).toBeNull( );
        });
        
        it("First Diff {x:['a'] {x:['b']}", function () {
            expect( JSON.stringify( aM_traversals.fgFirstDiff( {x:['a']}, {x:['b']}))).toBe( JSON.stringify( [ 'x', 0]));
        });
        
        it("First Diff {x:['a','b'] {x:['a','c']}", function () {
            expect( JSON.stringify( aM_traversals.fgFirstDiff( {x:['a','b']}, {x:['a','c']}))).toBe( JSON.stringify( [ 'x', 1]));
        });
        
        it("First Diff {x:['a','b']} {x:['a','b','c']}", function () {
            expect( JSON.stringify( aM_traversals.fgFirstDiff( {x:['a','b']}, {x:['a','b','c']}))).toBe( JSON.stringify( [ 'x']));
        });
        
        it("First Diff {x:['a','b', { }]}, {x:['a','b',{ }]}", function () {
            expect( aM_traversals.fgFirstDiff( {x:['a','b', { }]}, {x:['a','b',{ }]})).toBeNull();
        });
        
        it("First Diff {x:['a','b', { 'c': 1}]}, {x:['a','b',{ 'c': 1}]}", function () {
            expect( aM_traversals.fgFirstDiff( {x:['a','b', { 'c': 1}]}, {x:['a','b',{ 'c': 1}]})).toBeNull();
        });
        
        it("First Diff {x:['a','b', { }]}, {x:['a','b',{ 'c': 2}]}", function () {
            expect( JSON.stringify( aM_traversals.fgFirstDiff( {x:['a','b', { 'c': 1}]}, {x:['a','b',{ 'c': 2}]}))).toBe( JSON.stringify(['x', 2, 'c' ]));
        });
        
        it("First Diff {x:['a','b', { 'c': 1,  'd': 3}]}, {x:['a','b',{ 'c': 1,  'd': 4}]}", function () {
            expect( JSON.stringify( aM_traversals.fgFirstDiff( {x:['a','b', { 'c': 1,  'd': 3}]}, {x:['a','b',{ 'c': 1,  'd': 4}]}))).toBe( JSON.stringify(['x', 2, 'd' ]));
        });
        
        it("First Diff {x:['a','b', { 'c': 1,  'd': 3}]}, {x:['a','b',{ 'c': 1,  'd': 4}]}", function () {
            expect( JSON.stringify( aM_traversals.fgFirstDiff( {x:['a','b', { 'c': 1,  'd': 3}]}, {x:['a','b',{ 'c': 1,  'd': 4}]}))).toBe( JSON.stringify(['x', 2, 'd' ]));
        });
    
    
    
    
        it("Has fgFirstDiff defined", function () {
            expect( aM_traversals.fgFirstDiff).not.toBeUndefined();
        });
    
        it("Has fgFirstDiff typeof function", function () {
            expect( typeof aM_traversals.fgFirstDiff).toBe( "function");
        });
    
    
        it("fgFirstDiff('','') null", function () {
            expect( aM_traversals.fgFirstDiff( "", "")).toBeNull();
        });
    
        it("fgFirstDiff('a','a') null", function () {
            expect( aM_traversals.fgFirstDiff( "a", "a")).toBeNull();
        });
    
        it("fgFirstDiff(1,1) null", function () {
            expect( aM_traversals.fgFirstDiff( 1, 1)).toBeNull();
        });
    
        it("fgFirstDiff(true,true) null", function () {
            expect( aM_traversals.fgFirstDiff( true, true)).toBeNull();
        });
    
        it("fgFirstDiff({},{}) null", function () {
            expect( aM_traversals.fgFirstDiff( {}, {})).toBeNull();
        });
    
        it("fgFirstDiff([],[]) null", function () {
            expect( aM_traversals.fgFirstDiff( [], [])).toBeNull();
        });
    
    
    
        it("fgFirstDiff('a','') null", function () {
            expect( aM_traversals.fgFirstDiff( "a", "")).toBe( "/");
        });
    
        it("fgFirstDiff('a','b') null", function () {
            expect( aM_traversals.fgFirstDiff( "a", "b")).toBe( "/");
        });
    
        it("fgFirstDiff(1,2) null", function () {
            expect( aM_traversals.fgFirstDiff( 1, 2)).toBe( "/");
        });
    
        it("fgFirstDiff(true,true) null", function () {
            expect( aM_traversals.fgFirstDiff( true, false)).toBe( "/");
        });
    
        it("fgFirstDiff({},'') null", function () {
            expect( aM_traversals.fgFirstDiff( {}, '')).toBe( "/");
        });
    
        it("fgFirstDiff([],'') null", function () {
            expect( aM_traversals.fgFirstDiff( [], '')).toBe( "/");
        });
    
    
    
    
        it("fgFirstDiff({'a': 'a'},{'a': 'a'}) null", function () {
            expect( aM_traversals.fgFirstDiff( {'a': 'a'},{'a': 'a'})).toBeNull();
        });
    
        it("fgFirstDiff({'a': 'a','b':'b'},{'a': 'a','b':'b'}) null", function () {
            expect( aM_traversals.fgFirstDiff( {'a': 'a','b':'b'},{'a': 'a','b':'b'})).toBeNull();
        });
    
        it("fgFirstDiff({'a': 'a','b':'b'},{'a': 'a','b':'b'}) null", function () {
            expect( aM_traversals.fgFirstDiff( {'a': 'a','b':'b'},{'a': 'a','b':'b'})).toBeNull();
        });
    
        it("fgFirstDiff({'a': 'a','b':'b', c: {'d': 'd','e':'e'}},{'a': 'a','b':'b', c: {'d': 'd','e':'e'}}) null", function () {
            expect( aM_traversals.fgFirstDiff( {'a': 'a','b':'b', c: {'d': 'd','e':'e'}},{'a': 'a','b':'b', c: {'d': 'd','e':'e'}})).toBeNull();
        });
    
        it("fgFirstDiff({'a': 'a','b':'b', c: {'d': 'd','e':'e', 'f': {'g': 'g','h':'h', i: {'j': 'j','k':'k'}}}},{'a': 'a','b':'b', c: {'d': 'd','e':'e', 'f': {'g': 'g','h':'h', i: {'j': 'j','k':'k'}}}}) null", function () {
            expect( aM_traversals.fgFirstDiff( {'a': 'a','b':'b', c: {'d': 'd','e':'e', 'f': {'g': 'g','h':'h', i: {'j': 'j','k':'k'}}}},{'a': 'a','b':'b', c: {'d': 'd','e':'e', 'f': {'g': 'g','h':'h', i: {'j': 'j','k':'k'}}}})).toBeNull();
        });
    
    
    
    
        it("fgFirstDiff({'a': 'a'},{'a': 'b'}) null", function () {
            expect( JSON.stringify( aM_traversals.fgFirstDiff( {'a': 'a'},{'a': 'b'}))).toBe( JSON.stringify( ["a"]));
        });
    
    
        it("fgFirstDiff({'a': 'a'},{'b': 'a'}) null", function () {
            expect( JSON.stringify( aM_traversals.fgFirstDiff( {'a': 'a'},{'a': 'b'}))).toBe( JSON.stringify( ["a"]));
        });
    
        it("fgFirstDiff({'a': 'a','b':'b'},{'a': 'a','b':'c'}) null", function () {
            expect( JSON.stringify( aM_traversals.fgFirstDiff( {'a': 'a','b':'b'},{'a': 'a','b':'c'}))).toBe( JSON.stringify( ["b"]));
        });
    
        it("fgFirstDiff({'a': 'a','b':'b'},{'a': 'a','c':'b'}) null", function () {
            expect( JSON.stringify( aM_traversals.fgFirstDiff( {'a': 'a','b':'b'},{'a': 'a','b':'c'}))).toBe( JSON.stringify( ["b"]));
        });
    
        it("fgFirstDiff({'a': 'a','b':'b', c: {'d': 'd','e':'e'}},{'a': 'a','b':'b', c: {'d': 'x','e':'e'}}) null", function () {
            expect( JSON.stringify( aM_traversals.fgFirstDiff( {'a': 'a','b':'b', c: {'d': 'd','e':'e'}},{'a': 'a','b':'b', c: {'d': 'x','e':'e'}}))).toBe( JSON.stringify( ["c", "d"]));
        });
    
        it("fgFirstDiff({'a': 'a','b':'b', c: {'d': 'd','e':'e', 'f': {'g': 'g','h':'h', i: {'j': 'j','k':'k'}}}},{'a': 'a','b':'b', c: {'d': 'd','e':'e', 'f': {'g': 'g','h':'h', i: {'j': 'j','k':'k'}}}}) null", function () {
            expect( JSON.stringify( aM_traversals.fgFirstDiff( {'a': 'a','b':'b', c: {'d': 'd','e':'e', 'f': {'g': 'g','h':'h', i: {'j': 'j','k':'k'}}}},{'a': 'a','b':'b', c: {'d': 'd','e':'e', 'f': {'g': 'g','h':'h', i: {'j': 'j','k':'x'}}}}))).toBe( JSON.stringify( ["c","f","i","k"]));
        });
    
    
    });
    
});


if ( (typeof define === 'function') && define.amd) {
    // AMD / RequireJS
    /* Module name MUST BE A LITERAL STRING, I.E. "m_typesregistry_structural_test" not  a variable like ModuleSymbolicName.
    * If it is a variable, no test specs shall be registered (i.e., it does not invoke the test spec function */
    define( "m_traversals_fgFirstDiff_behavioral_test",
        [
            "m_traversals"
        ],
        aTest_spec
    );
}
else {
    aTest_spec();
}




