'use strict';

/*
 checks.js
 Creado 201504010326
 */

/*
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 te2est asyncshell written in Javascript http://www.te2est.org http://www.asyncshell.org

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
 */


(function () {
    
    var aMod_definer = function( theSS_typesregistry,
                                 theSS_Overrider){
    
    
        var ModuleName     = "checks";
        var ModulePackages = "utils";
        var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    
    
        var aMod_builder = function( theS_Overrider) {
    
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
        
        
        
        
            var pgInitWithModuleVariations = function( theToInit) {
            
                if( !theToInit) {
                }
            
            };
        
        
        
        
        
            var pgInitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }
            
                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };
        
        
            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
            theS_Overrider.pOverrideModuleVariations( ModuleFullName, ModuleVariations);
        
        
        
        
        
        
        
        
            var pgInitWithModuleConstants = function( theToInit) {
            
                if( !theToInit) {
                    return;
                }
            
                theToInit.JSONNAME_CHECKWHEN   = "checkWhen";
                theToInit.JSONNAME_CHECKNEGATE = "checkNegate";
                theToInit.JSONNAME_CHECKKIND   = "checkKind";
                theToInit.JSONNAME_CHECKORIGIN = "checkOrigin";
                theToInit.JSONNAME_CHECKSOURCE = "checkSource";
                theToInit.JSONNAME_CHECKVALUE  = "checkValue";
            
            
                theToInit.JSONNAMES_CHECKPARM = [
                    theToInit.JSONNAME_CHECKWHEN,
                    theToInit.JSONNAME_CHECKNEGATE,
                    theToInit.JSONNAME_CHECKKIND,
                    theToInit.JSONNAME_CHECKORIGIN,
                    theToInit.JSONNAME_CHECKSOURCE,
                    theToInit.JSONNAME_CHECKVALUE
                ];
            
            
            
                theToInit.REQUIREDJSONNAMES = [
                    theToInit.JSONNAME_CHECKWHEN,
                    theToInit.JSONNAME_CHECKKIND,
                    theToInit.JSONNAME_CHECKORIGIN,
                    theToInit.JSONNAME_CHECKSOURCE,
                    theToInit.JSONNAME_CHECKVALUE
                ];
            
            
            
                theToInit.CHECKKIND_TYPE_BOOL      = "TYPE_BOOL";
                theToInit.CHECKKIND_TYPE_STRING    = "TYPE_STRING";
                theToInit.CHECKKIND_TYPE_NUMBER    = "TYPE_NUMBER";
                theToInit.CHECKKIND_TYPE_OBJECT    = "TYPE_OBJECT";
                theToInit.CHECKKIND_TYPE_LIST      = "TYPE_LIST";
                theToInit.CHECKKIND_TYPE_FUNCTION  = "TYPE_FUNCTION";
                theToInit.CHECKKIND_NULL           = "NULL";
                theToInit.CHECKKIND_NOTNULL        = "NOTNULL";
                theToInit.CHECKKIND_EMPTYSTRING    = "EMPTYSTRING";
                theToInit.CHECKKIND_NOTEMPTYSTRING = "NOTEMPTYSTRING";
                theToInit.CHECKKIND_STRINGLEN      = "STRINGLEN";
                theToInit.CHECKKIND_EMPTYLIST      = "EMPTYLIST";
                theToInit.CHECKKIND_NOTEMPTYLIST   = "NOTEMPTYLIST";
                theToInit.CHECKKIND_LISTSIZE       = "LISTSIZE";
                theToInit.CHECKKIND_EMPTYDICT      = "EMPTYDICT";
                theToInit.CHECKKIND_NOTEMPTYDICT   = "NOTEMPTYDICT";
                theToInit.CHECKKIND_DICTSIZE       = "DICTSIZE";
                theToInit.CHECKKIND_EQ             = "EQ";
                theToInit.CHECKKIND_NEQ            = "NEQ";
                theToInit.CHECKKIND_GT             = "GT";
                theToInit.CHECKKIND_GTE            = "GTE";
                theToInit.CHECKKIND_LT             = "LT";
                theToInit.CHECKKIND_LTE            = "LTE";
                theToInit.CHECKKIND_INLIST         = "INLIST";
                theToInit.CHECKKIND_NOTINLIST      = "NOTINLIST";
                theToInit.CHECKKIND_LISTCONTAINS   = "LISTCONTAINS";
                theToInit.CHECKKIND_LISTNOTCONTAINS= "LISTNOTCONTAINS";
                theToInit.CHECKKIND_INKEYS         = "INKEYS";
                theToInit.CHECKKIND_NOTINKEYS      = "NOTINKEYS";
                theToInit.CHECKKIND_INVALUES       = "INVALUES";
                theToInit.CHECKKIND_NOTINVALUES    = "NOTINVALUES";
                theToInit.CHECKKIND_DICTCONTAINSKEY= "DICTCONTAINSKEY";
                theToInit.CHECKKIND_DICTNOTCONTAINSKEY= "DICTNOTCONTAINSKEY";
                theToInit.CHECKKIND_DICTCONTAINSVALUE= "DICTCONTAINSVALUE";
                theToInit.CHECKKIND_DICTNOTCONTAINSVALUE= "DICTNOTCONTAINSVALUE";
            
            
                theToInit.CHECKKINDS = [
                    theToInit.CHECKKIND_TYPE_BOOL,
                    theToInit.CHECKKIND_TYPE_STRING,
                    theToInit.CHECKKIND_TYPE_NUMBER,
                    theToInit.CHECKKIND_TYPE_OBJECT,
                    theToInit.CHECKKIND_TYPE_LIST,
                    theToInit.CHECKKIND_TYPE_FUNCTION,
                    theToInit.CHECKKIND_NULL,
                    theToInit.CHECKKIND_NOTNULL,
                    theToInit.CHECKKIND_EMPTYSTRING,
                    theToInit.CHECKKIND_NOTEMPTYSTRING,
                    theToInit.CHECKKIND_STRINGLEN,
                    theToInit.CHECKKIND_EMPTYLIST,
                    theToInit.CHECKKIND_NOTEMPTYLIST,
                    theToInit.CHECKKIND_LISTSIZE,
                    theToInit.CHECKKIND_EMPTYDICT,
                    theToInit.CHECKKIND_NOTEMPTYDICT,
                    theToInit.CHECKKIND_DICTSIZE,
                    theToInit.CHECKKIND_EQ,
                    theToInit.CHECKKIND_NEQ,
                    theToInit.CHECKKIND_GT,
                    theToInit.CHECKKIND_GTE,
                    theToInit.CHECKKIND_LT,
                    theToInit.CHECKKIND_LTE,
                    theToInit.CHECKKIND_INLIST,
                    theToInit.CHECKKIND_NOTINLIST,
                    theToInit.CHECKKIND_LISTCONTAINS,
                    theToInit.CHECKKIND_LISTNOTCONTAINS,
                    theToInit.CHECKKIND_INKEYS,
                    theToInit.CHECKKIND_NOTINKEYS,
                    theToInit.CHECKKIND_INVALUES,
                    theToInit.CHECKKIND_NOTINVALUES,
                    theToInit.CHECKKIND_DICTCONTAINSKEY,
                    theToInit.CHECKKIND_DICTNOTCONTAINSKEY,
                    theToInit.CHECKKIND_DICTCONTAINSVALUE,
                    theToInit.CHECKKIND_DICTNOTCONTAINSVALUE
                ];
            
            
            
            };
        
        
            var ModuleConstants = {};
            pgInitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);
        
        
        
        
            var pgInitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }
            
                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };
    
    
    
    
    
            var pgInitModuleGlobalsOn = function( theToInit) {
        
                if( !theToInit) {
                }
            };
    
    
    
            var ModuleGlobals = { };
            pgInitModuleGlobalsOn( ModuleGlobals);
    
    
    
    
            var aModule = {};
            pgInitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ModuleName      = ModuleName;
            aModule.ModulePackages  = ModulePackages;
            aModule.ModuleFullName  = ModuleFullName;
            aModule.ModuleVariations= ModuleVariations;
            aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.pgInitFromModuleConstants  = pgInitFromModuleConstants;
            aModule.pgInitFromModuleVariations = pgInitFromModuleVariations;
            aModule.pgInitModuleGlobalsOn      = pgInitModuleGlobalsOn;
        
        
        
        
        
        
        
        
        
        
            var fgNewVoidCheckSpec = function() {
            
                var aCheckSpec = {
                    "checkNegate":     null,
                    "checkKind":       null,
                    "checkSource":     null,
                    "valueConversion": null,
                    "checkValue":      null
                
                };
                if( fgNewVoidCheckSpec){}/* CQT */
            
                return aCheckSpec;
            };
            if( fgNewVoidCheckSpec){}/* CQT */
            aModule.fgNewVoidCheckSpec = fgNewVoidCheckSpec;
        
        
        
        
        
        
        
        
        
        
        
        
            var fgCheckCheck = function( theCheckKind, theCheckNegate, theActualValue, theCheckValue) {
            
                var aCheckResult = aModule.fgCheckCheck_inner( theCheckKind, theActualValue, theCheckValue);
                if( typeof aCheckResult === "undefined") {
                    return undefined;
                }
            
                var aFinalCheckResult = aCheckResult;
                if( aFinalCheckResult){}/* CQT */
                if( theCheckNegate) {
                    if( aFinalCheckResult) {
                        if( aFinalCheckResult){}/* CQT */
                        aFinalCheckResult = false;
                    }
                    else {
                        aFinalCheckResult = true;
                    }
                }
            
                return aFinalCheckResult;
            };
            if( fgCheckCheck){}/* CQT */
            aModule.fgCheckCheck = fgCheckCheck;
        
        
        
        
        
        
        
        
        
            var fgCheckCheck_inner = function( theCheckKind, theActualValue, theCheckValue) {
            
                if( !theCheckKind) {
                    return undefined;
                }
            
            
                var aCheckedCheckResult = undefined;
                var someKeys            = undefined;
                var aNumKeys            = undefined;
                var aValue              = undefined;
            
                try {
                
                    switch( theCheckKind) {
                    
                    
                        case aModule.CHECKKIND_TYPE_BOOL:
                        
                            aCheckedCheckResult = typeof theActualValue === typeof true;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_TYPE_STRING:
                        
                            aCheckedCheckResult = typeof theActualValue === typeof "";
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_TYPE_NUMBER:
                        
                            aCheckedCheckResult = typeof theActualValue === typeof (1);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_TYPE_OBJECT:
                        
                            aCheckedCheckResult = typeof theActualValue === typeof {};
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_TYPE_LIST:
                        
                            aCheckedCheckResult = ( typeof theActualValue === typeof []) && ( typeof theActualValue.length === typeof (0));
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_TYPE_FUNCTION:
                        
                            aCheckedCheckResult = typeof theActualValue === "function";
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_NULL:
                        
                            aCheckedCheckResult = theActualValue === null;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_NOTNULL:
                        
                            aCheckedCheckResult = !( theActualValue === null);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_EMPTYSTRING:
                        
                            aCheckedCheckResult = ( typeof theActualValue === typeof "") && ( theActualValue === "");
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_NOTEMPTYSTRING:
                        
                            aCheckedCheckResult = ( typeof theActualValue === typeof "") && !( theActualValue === "");
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_STRINGLEN:
                        
                            if( !( typeof theActualValue === typeof "")) {
                                return undefined;
                            }
                        
                            if( !( typeof theCheckValue === typeof (0))) {
                                return undefined;
                            }
                        
                            aCheckedCheckResult = theActualValue.length === theCheckValue;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_EMPTYLIST:
                        
                            aCheckedCheckResult = ( typeof theActualValue === typeof []) && ( typeof theActualValue.length === typeof (0)) && ( theActualValue.length === 0);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_NOTEMPTYLIST:
                        
                            aCheckedCheckResult = ( typeof theActualValue === typeof []) && ( typeof theActualValue.length === typeof (0)) && ( theActualValue.length > 0);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_LISTSIZE:
                        
                            if( !( typeof theActualValue === typeof []) || !( typeof theActualValue.length === typeof (0))) {
                                return undefined;
                            }
                        
                            if( !( typeof theCheckValue === typeof (0))) {
                                return undefined;
                            }
                        
                            aCheckedCheckResult = theActualValue.length === theCheckValue;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_EMPTYDICT:
                        
                            if( !theActualValue || !( typeof theActualValue === typeof {})) {
                                return undefined;
                            }
                        
                            someKeys = Object.keys( theActualValue);
                            aCheckedCheckResult = ( typeof someKeys === typeof []) && ( typeof someKeys.length === typeof (0)) && ( someKeys.length === 0);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_NOTEMPTYDICT:
                        
                            if( !theActualValue || !( typeof theActualValue === typeof {})) {
                                return undefined;
                            }
                        
                            someKeys = Object.keys( theActualValue);
                            aCheckedCheckResult = ( typeof someKeys === typeof []) && ( typeof someKeys.length === typeof (0)) && ( someKeys.length > 0);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_DICTSIZE:
                        
                            if( !( typeof theActualValue === typeof {})) {
                                return undefined;
                            }
                        
                            someKeys = Object.keys( theActualValue);
                            if( !( typeof someKeys === typeof []) || !( typeof someKeys.length === typeof (0))) {
                                return undefined;
                            }
                        
                            aCheckedCheckResult = someKeys.length === theCheckValue;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_EQ:
                            aCheckedCheckResult = aModule.fgIsSameAsValueFromTest( theCheckValue, theActualValue);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_NEQ:
                        
                            aCheckedCheckResult = !aModule.fgIsSameAsValueFromTest( theCheckValue, theActualValue);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_GT:
                        
                            aCheckedCheckResult = theActualValue > theCheckValue;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_GTE:
                        
                            aCheckedCheckResult = theActualValue >= theCheckValue;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_LT:
                        
                            aCheckedCheckResult = theActualValue < theCheckValue;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_LTE:
                        
                            aCheckedCheckResult = theActualValue <= theCheckValue;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_INLIST:
                        
                            if( !theCheckValue || !( typeof theCheckValue === typeof []) || !( typeof theCheckValue.length === typeof (0))) {
                                return undefined;
                            }
                        
                            if( !theCheckValue.indexOf || !( typeof theCheckValue.indexOf === "function")) {
                                return undefined;
                            }
                        
                            aCheckedCheckResult = theCheckValue.indexOf( theActualValue) >= 0;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_NOTINLIST:
                        
                            if( !theCheckValue || !( typeof theCheckValue === typeof []) || !( typeof theCheckValue.length === typeof (0))) {
                                return undefined;
                            }
                        
                            if( !theCheckValue.indexOf || !( typeof theCheckValue.indexOf === "function")) {
                                return undefined;
                            }
                        
                            aCheckedCheckResult = theCheckValue.indexOf( theActualValue) < 0;
                            return aCheckedCheckResult;
                    
                    
                    
                    
                        case aModule.CHECKKIND_LISTCONTAINS:
                        
                            if( !theActualValue || !( typeof theActualValue === typeof []) || !( typeof theActualValue.length === typeof (0))) {
                                return undefined;
                            }
                        
                            if( !theActualValue.indexOf || !( typeof theActualValue.indexOf === "function")) {
                                return undefined;
                            }
                        
                            aCheckedCheckResult = theActualValue.indexOf( theCheckValue) >= 0;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_LISTNOTCONTAINS:
                        
                            if( !theActualValue || !( typeof theActualValue === typeof []) || !( typeof theActualValue.length === typeof (0))) {
                                return undefined;
                            }
                        
                            if( !theActualValue.indexOf || !( typeof theActualValue.indexOf === "function")) {
                                return undefined;
                            }
                        
                            aCheckedCheckResult = theActualValue.indexOf( theCheckValue) < 0;
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_DICTCONTAINSKEY:
                        
                            if( !theCheckValue || !( typeof theCheckValue === typeof {})) {
                                return undefined;
                            }
                        
                            aCheckedCheckResult = theCheckValue.hasOwnProperty( theActualValue);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_DICTNOTCONTAINSKEY:
                        
                            if( typeof theActualValue === typeof undefined) {
                                return true;
                            }
                        
                            if( !theCheckValue || !( typeof theCheckValue === typeof {})) {
                                return undefined;
                            }
                        
                            aCheckedCheckResult = !theCheckValue.hasOwnProperty( theActualValue);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_INKEYS:
                        
                            if( !theActualValue || !( typeof theActualValue === typeof {})) {
                                return undefined;
                            }
                        
                            aCheckedCheckResult = theActualValue.hasOwnProperty( theCheckValue);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_NOTINKEYS:
                        
                            if( !theActualValue || !( typeof theActualValue === typeof {})) {
                                return undefined;
                            }
                        
                            aCheckedCheckResult = !theActualValue.hasOwnProperty( theCheckValue);
                            return aCheckedCheckResult;
                    
                    
                    
                        case aModule.CHECKKIND_DICTCONTAINSVALUE:
                        
                            if( !theActualValue || !( typeof theActualValue === typeof {})) {
                                return undefined;
                            }
                        
                            someKeys = Object.keys( theActualValue);
                            aNumKeys = someKeys.length;
                        
                            for( var aKeyIdx=0; aKeyIdx < aNumKeys; aKeyIdx++) {
                                var aKey = someKeys[ aKeyIdx];
                                if( theActualValue.hasOwnProperty( aKey)) {
                                    aValue = theActualValue[ aKey];
                                
                                    if( aModule.fgIsSameAsValueFromTest( theCheckValue, aValue)) {
                                        return true;
                                    }
                                }
                            }
                        
                            return false;
                    
                    
                    
                        case aModule.CHECKKIND_DICTNOTCONTAINSVALUE:
                        
                            if( !theActualValue || !( typeof theActualValue === typeof {})) {
                                return undefined;
                            }
                        
                            someKeys = Object.keys( theActualValue);
                            aNumKeys = someKeys.length;
                        
                            for( var otherKeyIdx=0; otherKeyIdx < aNumKeys; otherKeyIdx++) {
                                var otherKey = someKeys[ otherKeyIdx];
                                if( theActualValue.hasOwnProperty( otherKey)) {
                                    aValue = theActualValue[ otherKey];
                                
                                    if( aModule.fgIsSameAsValueFromTest( theCheckValue, aValue)) {
                                        return false;
                                    }
                                }
                            }
                        
                            return true;
                    
                    
                    
                    
                        case aModule.CHECKKIND_INVALUES:
                        
                            if( !theCheckValue || !( typeof theCheckValue === typeof {})) {
                                return undefined;
                            }
                        
                            someKeys = Object.keys( theCheckValue);
                            aNumKeys = someKeys.length;
                        
                            for( var anotherKeyIdx=0; anotherKeyIdx < aNumKeys; anotherKeyIdx++) {
                                var anotherKey = someKeys[ anotherKeyIdx];
                                if( theCheckValue.hasOwnProperty( anotherKey)) {
                                    aValue = theCheckValue[ anotherKey];
                                
                                    if( aModule.fgIsSameAsValueFromTest( aValue, theActualValue)) {
                                        return true;
                                    }
                                }
                            }
                        
                            return false;
                    
                    
                    
                    
                        case aModule.CHECKKIND_NOTINVALUES:
                        
                            if( !theCheckValue || !( typeof theCheckValue === typeof {})) {
                                return undefined;
                            }
                        
                            someKeys = Object.keys( theCheckValue);
                            aNumKeys = someKeys.length;
                        
                            for( var yetanotherKeyIdx=0; yetanotherKeyIdx < aNumKeys; yetanotherKeyIdx++) {
                                var yetanotherKey = someKeys[ yetanotherKeyIdx];
                                if( theCheckValue.hasOwnProperty( yetanotherKey)) {
                                    aValue = theCheckValue[ yetanotherKey];
                                
                                    if( aModule.fgIsSameAsValueFromTest( aValue, theActualValue)) {
                                        return false;
                                    }
                                }
                            }
                        
                            return true;
                    
                    
                    
                    
                        default:
                    }
                }
                catch( anException) {}
            
            
                return undefined;
            };
            if( fgCheckCheck_inner){}/* CQT */
            aModule.fgCheckCheck_inner = fgCheckCheck_inner;
        
        
        
        
        
        
        
            var fgIsSameAsValueFromTest = function( theCheckValue, theActualValue) {
            
            
                if( ( typeof theActualValue === "undefined") && ( typeof theCheckValue === "undefined") ) {
                    return false;
                }
            
                if( ( typeof theActualValue === "undefined") || ( typeof theCheckValue === "undefined") ) {
                    return false;
                }
            
            
                if( ( theActualValue == null) && ( theCheckValue == null)) {
                    return true;
                }
            
                if( ( theActualValue == null) || ( theCheckValue == null)) {
                    return false;
                }
            
            
                if( !( ( typeof theActualValue) === ( typeof theCheckValue))) {
                    return false;
                }
            
            
            
            
            
                if( typeof theActualValue === "string" ) {
                    return  theActualValue === theCheckValue;
                }
            
            
                if( typeof theActualValue === "number" ) {
                    return  theActualValue === theCheckValue;
                }
            
            
                if( typeof theActualValue === "boolean" ) {
                    return  theActualValue === theCheckValue;
                }
            
            
            
                if( !( typeof theActualValue === "object" )) {
                    return false;
                }
            
            
            
            
            
                var someCheckValueKeys   = Object.keys( theCheckValue);
                var aNumCheckValueKeys = someCheckValueKeys.length;
            
                var someActualValueKeys = Object.keys( theActualValue);
                var aNumActualValueKeys = someActualValueKeys.length;
            
                if( !( aNumActualValueKeys === aNumCheckValueKeys)) {
                    return false;
                }
            
                for( var aKeyIdx=0; aKeyIdx < aNumCheckValueKeys; aKeyIdx++) {
                    var aKey = someCheckValueKeys[ aKeyIdx];
                
                    if( !theActualValue.hasOwnProperty( aKey)) {
                        return false;
                    }
                
                    var aCheckValueSub = theCheckValue[ aKey];
                    var anActualSub   = theActualValue[ aKey];
                
                
                    if( !aModule.fgIsSameAsValueFromTest( aCheckValueSub, anActualSub)) {
                        return false;
                    }
                }
            
            
            
            
            
                var anActualLen    = theActualValue.length;
                var aCheckValueLen = theCheckValue.length;
            
                if( ( typeof anActualLen === "undefined") && ( typeof aCheckValueLen === "undefined")) {
                    return true;
                }
            
                if( ( typeof anActualLen === "undefined") || ( typeof aCheckValueLen === "undefined")) {
                    return false;
                }
            
                if( !( anActualLen === aCheckValueLen)) {
                    return false;
                }
            
                for( var aSubIdx=0; aSubIdx < anActualLen; aSubIdx++) {
                    var anActualListSub    = theActualValue[ aSubIdx];
                    var aCheckValueListSub = theCheckValue[ aSubIdx];
                
                    if( !aModule.fgIsSameAsValueFromTest( aCheckValueListSub, anActualListSub)) {
                        return false;
                    }
                
                }
            
                return true;
            };
            if( fgIsSameAsValueFromTest){}/* CQT */
            aModule.fgIsSameAsValueFromTest = fgIsSameAsValueFromTest;
        
        
        
        
        
            return aModule;
        };
    
    
    
    
    
    
    
      
    
    
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry === 'undefined')
            && ( typeof theSS_typesregistry.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_Overrider
            );
        
            aModule.ModuleBuilder = aMod_builder;
            aModule.ModuleSource  = aMod_builder.toString();
        
            anExistingModule = aModule;
        
            if(    !( typeof theSS_typesregistry === 'undefined')
                && ( typeof theSS_typesregistry.fRegisterModule === 'function')) {
                theSS_typesregistry.fRegisterModule( ModuleFullName, aModule);
            }
        }
    
    
    
        return anExistingModule;
    
    };
    

 
    if( !( typeof angular === 'undefined') && angular.module) {
        // Angular (1.x)
        
        angular.module("checks", [ 'modbootTypes']).factory("Checks",[
            "TypesRegistrySvce",
            "OverriderSvce",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry  = require('../modboot/typesregistry');
            var aM_overrider      = require('../modboot/overrider_type');
            
            return aMod_definer(
                aM_typesregistry,
                aM_overrider
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define([
                "../modboot/typesregistry",
                "../modboot/overrider_type"
            ],
            aMod_definer
            /* function (
                theM_typesregistry,
                theM_overrider
            ) {
                return aMod_definer(
                    theM_typesregistry,
                    theM_overrider,
                );
            }
            */);
    }

})();

