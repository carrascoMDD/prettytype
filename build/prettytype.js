
/*
 te2est-traversals-type.js refactoring of tes2est-traversals.js  to be Angular-agnostic , originally copy of traversals.js in te2est asyncshell project
 Creado 201505182205
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
    
    var ComponentName    = "prettytype";
    var ModuleName     = "traversals";
    var ModulePackages = "utils";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    var aMod_definer = ( function( theSS_typesregistry_svce,
                                   theSS_overrider_type){
        
    
        var aMod_builder = function( theS_overrider_type) {
    
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
        
        
        
        
        
            var pgInitWithModuleVariations = function( theToInit) {
            
                if( !theToInit) {
                }
            
            };
        
        
        
        
        
            var InitFromModuleVariations = function( theToInit) {
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
            if( theS_overrider_type) {
                theS_overrider_type.pOverrideModuleVariations( ModuleFullName, ModuleVariations);
            }
    
    
    
    
    
    
    
    
            /* ***************************************************************
               Init here key-value pairs, considered constants - and therefore with an expected read-only life-cycle.
               Constants can be accessed through the Module .ModuleConstants.
            */
            var pgInitWithModuleConstants = function( theToInit) {
            
                if( !theToInit) {
                    return;
                }
            
            
            
                theToInit.ROOTPATHSTEPSYMBOL = "#root";
            
            
                theToInit.SPECPATHROOTPATHSTEPSYMBOL = "#testsroot";
            
            
                theToInit.PATHSREPLACEABLESYMBOL = "#";
            
            
                theToInit.DONOTCOMPAREVALUESYMBOL = "@DONOTCOMPARE699@";
            
            
                theToInit.TRAVERSAL_WHOLE = "*";
            
                theToInit.TRAVERSALSTEPSSEPARATOR = ".";
            
                theToInit.TRAVERSALSTEP_LENGTH = "length";
                theToInit.TRAVERSALSTEP_LAST   = "last";
                theToInit.TRAVERSALSTEP_FIRST  = "first";
                theToInit.TRAVERSALSTEP_ALL    = "all";
            
            
                theToInit.TRAVERSALSTEP_KEYEDSEPARATOR  = "=";
            
                theToInit.REPLACEPARMVALUEWITHPARMPREFIX = "~";
            
                theToInit.REPLACEPARMVALUEDOT = ".";
            
            
            
                theToInit.ANYEXCEPTION = "*";
            
            
                theToInit.VALUEDIFFATTOP = "/";
            
            
                theToInit.SYMBOLICSTEPREGEXPSTR = "^\\?(\\w+)\\=(\\-?[0-9]+)$";
                theToInit.SYMBOLICSTEPREGEXP    = new RegExp( theToInit.SYMBOLICSTEPREGEXPSTR);
            
                theToInit.KEYEDSTEPREGEXPSTR = "^\\#(\\-?[0-9]+)$";
                theToInit.KEYEDSTEPREGEXP    = new RegExp( theToInit.KEYEDSTEPREGEXPSTR);
            };
    
    
            /* ***************************************************************
               Holder of name-values in the Module, considered Constants.
            */
            var ModuleConstants = {};
            InitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);
    
    
    
    
            /* ***************************************************************
               Just copy each key-value in ModuleConstants onto the supplied object.
               Used to fill the Module object and the Prototype object with the key-value pairs in Constants.
             */
            var InitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }
            
                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };
    
    
    
    
    
            /* ***************************************************************
               Init here name-values, considered Globals - and therefore with an expected read-write life-cycle.
               Globals can only be accessed through the Module .ModuleGlobals. Instances may access this._v_Module.ModuleGlobals
            */
            var InitModuleGlobalsOn = function( theToInit) {
        
                if( !theToInit) {
                }
            };
    
    
    
    
            /* ***************************************************************
              Holder of name-values in the Module, considered Globals.
            */
            var ModuleGlobals = { };
            InitModuleGlobalsOn( ModuleGlobals);
    
    
    
    
            var aModule = {};
            InitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ComponentName     = ComponentName;
            aModule.ModuleName      = ModuleName;
            aModule.ModulePackages  = ModulePackages;
            aModule.ModuleFullName  = ModuleFullName;
            aModule.ModuleVariations= ModuleVariations;
            aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.InitFromModuleConstants  = InitFromModuleConstants;
            aModule.InitFromModuleVariations = InitFromModuleVariations;
            aModule.InitModuleGlobalsOn      = InitModuleGlobalsOn;
        
        
        
        
        
        
        
        
        
            var fgParmValueReplacement= function( theConfiguration, theParmValue, theMapForStepsWithParmPrefix) {
            
                if( !theParmValue) {
                    return theParmValue;
                }
            
                if( !( typeof theParmValue === "string")) {
                    return theParmValue;
                }
            
                var aParmValueLen = theParmValue.length;
                if( !aParmValueLen) {
                    return theParmValue;
                }
            
                if( !( theParmValue.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) === 0)) {
                    return theParmValue;
                }
            
                if( aParmValueLen < 2) {
                    return theParmValue;
                }
            
                if( theParmValue.indexOf( aModule.REPLACEPARMVALUEDOT) > 0) {
                    return fgParmValueReplacement_DotNotation( theConfiguration, theParmValue, theMapForStepsWithParmPrefix);
                }
            
                if( !theConfiguration) {
                    return theParmValue;
                }
            
                var aReplacementValue = theParmValue;
            
                var otherReplacementParmName = theParmValue.substring( 1);
            
                var otherParmsToResolve = [ otherReplacementParmName];
            
                var otherParmResolutionsDict = theConfiguration.fParmResolutionsByName( otherParmsToResolve, theMapForStepsWithParmPrefix);
                if( otherParmResolutionsDict) {
                
                    var otherReplacementResolution = otherParmResolutionsDict[ otherReplacementParmName];
                    if( otherReplacementResolution && otherReplacementResolution._v_Success) {
                        aReplacementValue = otherReplacementResolution._v_ParmValue;
                    }
                }
            
                return aReplacementValue;
            };
            if( fgParmValueReplacement){}/* CQT */
            aModule.fgParmValueReplacement = fgParmValueReplacement;
        
        
        
        
        
        
        
        
        
        
        
            var fgParmValueReplacement_DotNotation= function( theConfiguration, theParmValue, theMapForStepsWithParmPrefix) {
            
                if( !theParmValue) {
                    return theParmValue;
                }
            
                if( !( typeof theParmValue === "string")) {
                    return theParmValue;
                }
            
            
                var aParmValueLen = theParmValue.length;
                if( aParmValueLen < 4) { /* expresion minima es ~x.y  */
                    return theParmValue;
                }
            
                if( !( theParmValue.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) === 0)) {
                    return theParmValue;
                }
            
                var aDotIndex = theParmValue.indexOf( aModule.REPLACEPARMVALUEDOT);
                if( aDotIndex < 0) {
                    return fgParmValueReplacement( theConfiguration, theParmValue, theMapForStepsWithParmPrefix);
                }
            
                if( aDotIndex < 2) {
                    return theParmValue;
                }
            
            
            
                var aReplacementParmNameWOdot = theParmValue.substring( 0, aDotIndex);
                var aParmValueAfterDot        = theParmValue.substring( aDotIndex + 1);
            
                /* Unused 201805122138
                var aReplacementParmNameWOdotWoPrefix = aReplacementParmNameWOdot.substring( 1);
                 */
            
                var aParmValueReplacementWoDot = fgParmValueReplacement( theConfiguration, aReplacementParmNameWOdot, theMapForStepsWithParmPrefix);
            
                if( ( typeof aParmValueReplacementWoDot === "undefined")
                    || ( aParmValueReplacementWoDot == null)
                    || !( typeof aParmValueReplacementWoDot === "object") ) {
                
                    return aParmValueReplacementWoDot;
                }
            
                if( aDotIndex >= ( aParmValueLen - 1)) {
                    return aParmValueReplacementWoDot;
                }
            
                if( !aParmValueAfterDot) {
                    return aParmValueReplacementWoDot;
                }
            
            
                var aTraversalResult = fgTraverseToFromValue( aParmValueAfterDot, aParmValueReplacementWoDot, theMapForStepsWithParmPrefix);
                if( !( typeof aTraversalResult === "object") || ( aTraversalResult == null)) {
                    return aTraversalResult;
                }
            
                var aReplacementResult = aTraversalResult[ "value"];
                if( aReplacementResult){}/* CQT */
                return aReplacementResult;
            };
            if( fgParmValueReplacement_DotNotation){}/* CQT */
            aModule.fgParmValueReplacement_DotNotation = fgParmValueReplacement_DotNotation;
        
        
        
        
        
        
        
        
        
        
        
            var fgTraverseToFromValue = function( theSourceSteps, theValue, theMapForStepsWithParmPrefix) {
                if( !theSourceSteps) {
                    return null;
                }
            
                if( theSourceSteps === aModule.TRAVERSAL_WHOLE) {
                    return { "name": theSourceSteps, "value": theValue};
                }
            
                if( !theValue) {
                    return null;
                }
            
                var someCheckSourceSteps = theSourceSteps;
            
                if( typeof someCheckSourceSteps === "string") {
                
                    if( someCheckSourceSteps.indexOf( aModule.TRAVERSALSTEPSSEPARATOR) >= 0) {
                        someCheckSourceSteps = someCheckSourceSteps.split( aModule.TRAVERSALSTEPSSEPARATOR);
                    }
                    else {
                        someCheckSourceSteps = [ someCheckSourceSteps];
                    }
                }
                if( !someCheckSourceSteps) {
                    return null;
                }
            
                var aNumCheckSourceSteps = someCheckSourceSteps.length;
                if( !aNumCheckSourceSteps) {
                    return null;
                }
            
            
            
            
            
            
                var aStepName = someCheckSourceSteps[ 0].trim();
            
            
            
                if( aNumCheckSourceSteps === 1) {
                
                    if( aStepName === aModule.TRAVERSALSTEP_LENGTH) {
                        return { "value": theValue.length};
                    }
                
                
                    if( aStepName === aModule.TRAVERSALSTEP_FIRST) {
                        if( !theValue.length) {
                            return null;
                        }
                        return { "value": theValue[ 0]};
                    }
                
                
                    if( aStepName === aModule.TRAVERSALSTEP_LAST) {
                        if( !theValue.length) {
                            return null;
                        }
                        return { "value": theValue[ theValue.length - 1]};
                    }
                
                
                    if( aStepName === aModule.TRAVERSALSTEP_ALL) {
                        if( !theValue.length) {
                            return { "value": []};
                        }
                        return { "value": theValue};
                    }
                
                
                
                
                    var aKeyedSeparatorIndex = aStepName.indexOf( aModule.TRAVERSALSTEP_KEYEDSEPARATOR);
                    if ( ( aKeyedSeparatorIndex > 0) && ( aKeyedSeparatorIndex < ( aStepName.length - 1))) {
                        var aValueLen = theValue.length;
                        if( !aValueLen) {
                            return null;
                        }
                        var aKeyName  = aStepName.slice( 0, aKeyedSeparatorIndex);
                        var aKeyValue = aStepName.slice( aKeyedSeparatorIndex);
                        if( !aKeyName || !aKeyValue) {
                            return null;
                        }
                        var aMatchingParmValueElem = null;
                        for( var aValueElemIdx=0; aValueElemIdx < aValueLen; aValueElemIdx++) {
                            var aValueElem = theValue[ aValueElemIdx];
                            if( !aValueElem) {
                                continue;
                            }
                            if( !( typeof aValueElem === "object")) {
                                continue;
                            }
                            if( !aValueElem.hasOwnProperty( aKeyName)) {
                                continue;
                            }
                            var aValueElemKeyedValue    = aValueElem[ aKeyName];
                            if( !aValueElemKeyedValue) {
                                continue;
                            }
                            var aValueElemKeyedValueStr = aValueElemKeyedValue;
                            if( !( typeof aValueElemKeyedValueStr === "string")) {
                                aValueElemKeyedValueStr = new String( aValueElemKeyedValue);
                            }
                            if( !( aValueElemKeyedValueStr === aKeyValue)) {
                                continue;
                            }
                            aMatchingParmValueElem = aValueElem;
                            break;
                        }
                    
                        if( typeof aMatchingParmValueElem === "undefined") {
                            return  null;
                        }
                        if( aMatchingParmValueElem == null) {
                            return null;
                        }
                    
                        return { "value": aMatchingParmValueElem};
                    }
                
                
                
                
                
                    var aReplacedSingleStepName = aStepName;
                    if( aStepName.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) === 0) {
                    
                        var aSingleStepNameWoPrefix = aStepName.slice( 1);
                        if( aSingleStepNameWoPrefix) {
                        
                            var aSingleParmResolutionForStepWithParmPrefix = theMapForStepsWithParmPrefix[ aSingleStepNameWoPrefix];
                        
                            if( typeof aSingleParmResolutionForStepWithParmPrefix === "undefined") {
                                return null;
                            }
                        
                            aReplacedSingleStepName = aSingleParmResolutionForStepWithParmPrefix;
                        }
                    }
                
                
                
                    var aOneStepTestValue = theValue[ aReplacedSingleStepName];
                
                    if( typeof aOneStepTestValue === "undefined") {
                        return  null;
                    }
                
                    return { "value": aOneStepTestValue};
                }
            
            
            
            
            
            
            
            
                var aReplacedStepName = aStepName;
                if( aStepName.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) === 0) {
                
                    var aStepNameWoPrefix = aStepName.slice( 1);
                    if( aStepNameWoPrefix) {
                    
                        var aParmResolutionForStepWithParmPrefix = theMapForStepsWithParmPrefix[ aStepNameWoPrefix];
                    
                        if( typeof aParmResolutionForStepWithParmPrefix === "undefined") {
                            return null;
                        }
                    
                        aReplacedStepName = aParmResolutionForStepWithParmPrefix;
                    }
                }
            
            
                var aTestValue = theValue[ aReplacedStepName];
                if( typeof aTestValue === "undefined") {
                    return  null;
                }
            
                if( aTestValue == null) {
                    return  null;
                }
            
            
            
            
                var aNumStepsToTraverse = aNumCheckSourceSteps - 1;
            
                var aSubStepValue = aTestValue;
                for( var aSubStepIdx=1; aSubStepIdx < aNumStepsToTraverse; aSubStepIdx++) {
                    var aSubStepName = someCheckSourceSteps[ aSubStepIdx];
                    if( aSubStepName) {
                        aSubStepName = aSubStepName.trim();
                    
                        if( aSubStepName === aModule.TRAVERSALSTEP_LENGTH) {
                            return { "value": aSubStepValue.length};
                        }
                        else {
                            if( aSubStepName === aModule.TRAVERSALSTEP_FIRST) {
                                if( (typeof aSubStepValue === "undefined") || ( aSubStepValue == null) || (typeof aSubStepValue.length === "undefined") || !aSubStepValue.length) {
                                    return null;
                                }
                                aSubStepValue = aSubStepValue[ 0];
                            }
                            else {
                                if( aSubStepName === aModule.TRAVERSALSTEP_LAST) {
                                    if( (typeof aSubStepValue === "undefined") || ( aSubStepValue == null) || (typeof aSubStepValue.length === "undefined") || !aSubStepValue.length) {
                                        return null;
                                    }
                                    aSubStepValue = aSubStepValue[ aSubStepValue.length - 1];
                                }
                                else {
                                
                                    if( aSubStepName === aModule.TRAVERSALSTEP_ALL) {
                                        if( (typeof aSubStepValue === "undefined") || ( aSubStepValue == null) || (typeof aSubStepValue.length === "undefined") || !aSubStepValue.length) {
                                            return { "value": []};
                                        }
                                    
                                        var someStepsToCollect = someCheckSourceSteps.slice( aSubStepIdx + 1);
                                    
                                        var someCollected = [ ];
                                    
                                        var someToCollect = aSubStepValue.slice();
                                        var aNumToCollect = someToCollect.length;
                                        for( var aToCollectIdx=0; aToCollectIdx < aNumToCollect; aToCollectIdx++) {
                                        
                                            var aToCollect = someToCollect[ aToCollectIdx];
                                        
                                            var aCollectedTraversalResult = fgTraverseToFromValue( someStepsToCollect, aToCollect);
                                        
                                            if( aCollectedTraversalResult) {
                                                var aCollectedTraversalValue = aCollectedTraversalResult[ "value"];
                                                someCollected.push( aCollectedTraversalValue);
                                            }
                                        }
                                    
                                        return { "value": someCollected};
                                    }
                                    else {
                                    
                                        var aSubStepKeyedSeparatorIndex = aSubStepName.indexOf( aModule.TRAVERSALSTEP_KEYEDSEPARATOR);
                                        if ( ( aSubStepKeyedSeparatorIndex > 0) && ( aSubStepKeyedSeparatorIndex < ( aSubStepName.length - 1))) {
                                            var aSubStepParmValueLen = aSubStepValue.length;
                                            if( !aSubStepParmValueLen) {
                                                return null;
                                            }
                                            var aSubStepKeyName  = aSubStepName.slice( 0, aSubStepKeyedSeparatorIndex);
                                            var aSubStepKeyValue = aSubStepName.slice( aSubStepKeyedSeparatorIndex + 1);
                                            if( !aSubStepKeyName || !aSubStepKeyValue) {
                                                return null;
                                            }
                                            var aSubStepMatchingParmValueElem = null;
                                            for( var aSubStepParmValueElemIdx=0; aSubStepParmValueElemIdx < aSubStepParmValueLen; aSubStepParmValueElemIdx++) {
                                                var aSubStepParmValueElem = aSubStepValue[ aSubStepParmValueElemIdx];
                                                if( !aSubStepParmValueElem) {
                                                    continue;
                                                }
                                                if( !( typeof aSubStepParmValueElem === "object")) {
                                                    continue;
                                                }
                                                if( !aSubStepParmValueElem.hasOwnProperty( aSubStepKeyName)) {
                                                    continue;
                                                }
                                                var aSubStepParmValueElemKeyedValue    = aSubStepParmValueElem[ aSubStepKeyName];
                                                if( !aSubStepParmValueElemKeyedValue) {
                                                    continue;
                                                }
                                                var aSubStepParmValueElemKeyedValueStr = aSubStepParmValueElemKeyedValue;
                                                if( !( typeof aSubStepParmValueElemKeyedValueStr === "string")) {
                                                    aSubStepParmValueElemKeyedValueStr = new String( aSubStepParmValueElemKeyedValue);
                                                }
                                                if( !( aSubStepParmValueElemKeyedValueStr === aSubStepKeyValue)) {
                                                    continue;
                                                }
                                                aSubStepMatchingParmValueElem = aSubStepParmValueElem;
                                                break;
                                            }
                                        
                                            if( typeof aSubStepMatchingParmValueElem === "undefined") {
                                                return null;
                                            }
                                        
                                            if( aSubStepMatchingParmValueElem == null) {
                                                return null;
                                            }
                                        
                                            aSubStepValue = aSubStepMatchingParmValueElem;
                                        }
                                    
                                    
                                    
                                    
                                        else {
                                            var aReplacedSubStepName = aSubStepName;
                                        
                                            if( aSubStepName.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) === 0) {
                                            
                                                var aSubStepNameWoPrefix = aSubStepName.slice( 1);
                                            
                                                var aParmResolutionForSubStepWithParmPrefix = theMapForStepsWithParmPrefix[ aSubStepNameWoPrefix];
                                                if( typeof aParmResolutionForSubStepWithParmPrefix === "undefined") {
                                                    return null;
                                                }
                                            
                                                aReplacedSubStepName = aParmResolutionForSubStepWithParmPrefix;
                                            }
                                        
                                            aSubStepValue = aSubStepValue[ aReplacedSubStepName];
                                        }
                                    }
                                }
                            }
                        }
                    
                    
                        if( typeof aSubStepValue === "undefined") {
                            return null;
                        }
                    
                    
                        if( aSubStepValue == null) {
                            return { "value": null};
                        }
                    
                    }
                }
            
            
                if( aSubStepValue == null) {
                    return { "value": null};
                }
            
            
                var aLastStepName = someCheckSourceSteps[ aNumCheckSourceSteps - 1];
                if( !aLastStepName) {
                    return null;
                }
                aLastStepName = aLastStepName.trim();
                if( !aLastStepName) {
                    return null;
                }
            
                if( aLastStepName === aModule.TRAVERSALSTEP_LENGTH) {
                    return { "value": aSubStepValue.length};
                }
            
                if( aLastStepName === aModule.TRAVERSALSTEP_FIRST) {
                    if( !aSubStepValue.length) {
                        return null;
                    }
                    return { "value": aSubStepValue[ 0]};
                }
            
                if( aLastStepName === aModule.TRAVERSALSTEP_LAST) {
                    if( !aSubStepValue.length) {
                        return null;
                    }
                    return { "value": aSubStepValue[ aSubStepValue.length - 1]};
                }
            
                if( aLastStepName === aModule.TRAVERSALSTEP_ALL) {
                    if( !aSubStepValue.length) {
                        return { "value": []};
                    }
                    return { "value": aSubStepValue};
                }
            
            
            
                var aLastKeyedSeparatorIndex = aLastStepName.indexOf( aModule.TRAVERSALSTEP_KEYEDSEPARATOR);
                if ( ( aLastKeyedSeparatorIndex > 0) && ( aLastKeyedSeparatorIndex < ( aLastStepName.length - 1))) {
                    var aLastValueLen = aSubStepValue.length;
                    if( !aLastValueLen) {
                        return null;
                    }
                    var aLastKeyName  = aLastStepName.slice( 0, aLastKeyedSeparatorIndex);
                    var aLastKeyValue = aLastStepName.slice( aLastKeyedSeparatorIndex);
                    if( !aKeyName || !aKeyValue) {
                        return null;
                    }
                    var aLastMatchingParmValueElem = null;
                    for( var aLastValueElemIdx=0; aLastValueElemIdx < aLastValueLen; aLastValueElemIdx++) {
                        var aLastValueElem = aSubStepValue[ aLastValueElemIdx];
                        if( !aLastValueElem) {
                            continue;
                        }
                        if( !( typeof aLastValueElem === "object")) {
                            continue;
                        }
                        if( !aLastValueElem.hasOwnProperty( aLastKeyName)) {
                            continue;
                        }
                        var aLastValueElemKeyedValue    = aLastValueElem[ aLastKeyName];
                        if( !aLastValueElemKeyedValue) {
                            continue;
                        }
                        var aLastValueElemKeyedValueStr = aLastValueElemKeyedValue;
                        if( !( typeof aLastValueElemKeyedValueStr === "string")) {
                            aLastValueElemKeyedValueStr = new String( aLastValueElemKeyedValue);
                        }
                        if( !( aLastValueElemKeyedValueStr === aLastKeyValue)) {
                            continue;
                        }
                        aLastMatchingParmValueElem = aLastValueElem;
                        break;
                    }
                
                    if( typeof aLastMatchingParmValueElem === "undefined") {
                        return null;
                    }
                
                    if( aLastMatchingParmValueElem == null) {
                        return null;
                    }
                
                    return { "value": aLastMatchingParmValueElem};
                }
            
            
            
            
                var aReplacedLastStepName = aLastStepName;
            
                if( aLastStepName.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) === 0) {
                
                    var aLastStepNameWoPrefix = aLastStepName.slice( 1);
                
                    var aParmResolutionForLastStepWithParmPrefix = theMapForStepsWithParmPrefix[ aLastStepNameWoPrefix];
                    if( typeof aParmResolutionForLastStepWithParmPrefix === "undefined") {
                        return null;
                    }
                
                    aReplacedLastStepName = aParmResolutionForLastStepWithParmPrefix;
                }
            
            
                var aLastStepTestValue = aSubStepValue[ aReplacedLastStepName];
                if( typeof aLastStepTestValue === "undefined") {
                    return  null;
                }
            
                return { "value": aLastStepTestValue};
            };
            if( fgTraverseToFromValue){}/* CQT */
            aModule.fgTraverseToFromValue = fgTraverseToFromValue;
        
        
        
        
        
        
        
        
        
            var fgTraverseToFromValueReturnValueOrNull = function( theSourceSteps, theValue, theMapForStepsWithParmPrefix) {
            
                var aTraversalResult = fgTraverseToFromValue( theSourceSteps, theValue, theMapForStepsWithParmPrefix);
                if( !aTraversalResult) {
                    return null;
                }
            
                var aTraversalValue = aTraversalResult[ "value"];
                if( aTraversalValue){}/* CQT */
            
                return aTraversalValue;
            
            };
            if( fgTraverseToFromValueReturnValueOrNull){}/* CQT */
            aModule.fgTraverseToFromValueReturnValueOrNull = fgTraverseToFromValueReturnValueOrNull;
        
        
        
        
        
        
        
        
        
            var fgHasAnyStepsWithParmPrefix = function( theSourceSteps) {
            
                if( !theSourceSteps) {
                    return false;
                }
            
                if( theSourceSteps === aModule.TRAVERSAL_WHOLE) {
                    return false;
                }
            
                if( theSourceSteps.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) < 0) {
                    return false;
                }
            
                var someCheckSourceSteps = theSourceSteps;
            
                if( typeof someCheckSourceSteps === "string") {
                
                    if( someCheckSourceSteps.indexOf( aModule.TRAVERSALSTEPSSEPARATOR) >= 0) {
                        someCheckSourceSteps = someCheckSourceSteps.split( aModule.TRAVERSALSTEPSSEPARATOR);
                    }
                    else {
                        someCheckSourceSteps = [ someCheckSourceSteps];
                    }
                }
                if( !someCheckSourceSteps) {
                    return false;
                }
            
                var aNumCheckSourceSteps = someCheckSourceSteps.length;
                if( !aNumCheckSourceSteps) {
                    return false;
                }
            
                for( var aStepForWithParmPrefixIdx=0; aStepForWithParmPrefixIdx < aNumCheckSourceSteps; aStepForWithParmPrefixIdx++) {
                
                    var aStepForWithParmPrefix = someCheckSourceSteps[ aStepForWithParmPrefixIdx];
                    if( aStepForWithParmPrefix && ( aStepForWithParmPrefix.length > 1))  {
                    
                        if( aStepForWithParmPrefix.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) === 0) {
                            return true;
                        }
                    }
                }
            
                return false;
            };
            if( fgHasAnyStepsWithParmPrefix){}/* CQT */
            aModule.fgHasAnyStepsWithParmPrefix = fgHasAnyStepsWithParmPrefix;
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
            var fgStepsWithParmPrefix = function( theSourceSteps, theStepsWithParmPrefix) {
                if( !theSourceSteps) {
                    return null;
                }
            
                if( theSourceSteps === aModule.TRAVERSAL_WHOLE) {
                    return null;
                }
            
                var someCheckSourceSteps = theSourceSteps;
            
                if( typeof someCheckSourceSteps === "string") {
                
                    if( someCheckSourceSteps.indexOf( aModule.TRAVERSALSTEPSSEPARATOR) >= 0) {
                        someCheckSourceSteps = someCheckSourceSteps.split( aModule.TRAVERSALSTEPSSEPARATOR);
                    }
                    else {
                        someCheckSourceSteps = [ someCheckSourceSteps];
                    }
                }
                if( !someCheckSourceSteps) {
                    return null;
                }
            
                var aNumCheckSourceSteps = someCheckSourceSteps.length;
                if( !aNumCheckSourceSteps) {
                    return null;
                }
            
                var someStepsWithParmPrefix = theStepsWithParmPrefix;
                if( ( someStepsWithParmPrefix == null) || !( typeof someStepsWithParmPrefix === "object") || !( typeof someStepsWithParmPrefix.length === "number")) {
                    someStepsWithParmPrefix = [ ];
                }
            
                for( var aStepForWithParmPrefixIdx=0; aStepForWithParmPrefixIdx < aNumCheckSourceSteps; aStepForWithParmPrefixIdx++) {
                
                    var aStepForWithParmPrefix = someCheckSourceSteps[ aStepForWithParmPrefixIdx];
                    if( aStepForWithParmPrefix && ( aStepForWithParmPrefix.length > 1))  {
                    
                        if( aStepForWithParmPrefix.indexOf( aModule.REPLACEPARMVALUEWITHPARMPREFIX) === 0) {
                        
                            var aStepForWithParmPrefixWoPrefix = aStepForWithParmPrefix.substring( 1);
                            if( aStepForWithParmPrefixWoPrefix) {
                                if( someStepsWithParmPrefix.indexOf( aStepForWithParmPrefixWoPrefix) < 0) {
                                    someStepsWithParmPrefix.push( aStepForWithParmPrefixWoPrefix);
                                }
                            }
                        }
                    }
                }
            
                var aNumStepsWithParmPrefix = someStepsWithParmPrefix.length;
                if( !aNumStepsWithParmPrefix) {
                    return null;
                }
            
            
                return someStepsWithParmPrefix;
            };
            if( fgStepsWithParmPrefix){}/* CQT */
            aModule.fgStepsWithParmPrefix = fgStepsWithParmPrefix;
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
            var fgFirstDiff = function( theActualValue, theCheckValue) {
            
                var aDiff = fgFirstDiff_inner( theActualValue, theCheckValue);
                if( !aDiff) {
                    return null;
                }
    
                if( aDiff === aModule.VALUEDIFFATTOP) {
                    return aModule.VALUEDIFFATTOP;
                }
                
                if( !aDiff.length) {
                    /* Unexpected: results should e either null, VALUEDIFFATTOP, or a list of diffs, even a size 1 list.
                    */
                    return aModule.VALUEDIFFATTOP;
                }
                
                var aReverseDiff = aDiff.reverse();
                if( aReverseDiff){}/* CQT */
                return aReverseDiff;
            };
            if( fgFirstDiff){}/* CQT */
            aModule.fgFirstDiff = fgFirstDiff;
    
    
    
    
            var fgFirstDiff_inner = function( theActualValue, theCheckValue) {
        
                if( !( typeof theCheckValue === "undefined") &&  ( theCheckValue === aModule.DONOTCOMPAREVALUESYMBOL)) {
                    return null;
                }
        
                if( ( typeof theActualValue === "undefined") && ( typeof theCheckValue === "undefined") ) {
                    return null;
                }
        
                if( ( typeof theActualValue === "undefined") || ( typeof theCheckValue === "undefined") ) {
                    return aModule.VALUEDIFFATTOP;
                }
        
                if( ( theActualValue == null) && ( theCheckValue == null)) {
                    return null;
                }
        
                if( ( theActualValue == null) || ( theCheckValue == null)) {
                    return aModule.VALUEDIFFATTOP;
                }
        
        
                if( !( ( typeof theActualValue) === ( typeof theCheckValue))) {
                    return aModule.VALUEDIFFATTOP;
                }
        
        
        
        
        
                if( typeof theActualValue === "string" ) {
                    if( theCheckValue === aModule.DONOTCOMPAREVALUESYMBOL) {
                        return null;
                    }
                    if( !( theActualValue === theCheckValue)) {
                        return aModule.VALUEDIFFATTOP;
                    }
                    return null;
                }
        
        
                if( typeof theActualValue === "number" ) {
                    if( !( theActualValue === theCheckValue)) {
                        return aModule.VALUEDIFFATTOP;
                    }
                    return null;
                }
        
        
                if( typeof theActualValue === "boolean" ) {
                    if( !( theActualValue === theCheckValue)) {
                        return aModule.VALUEDIFFATTOP;
                    }
                    return null;
                }
        
        
                if( typeof theActualValue === "function" ) {
                    if( !( theActualValue === theCheckValue)) {
                        return aModule.VALUEDIFFATTOP;
                    }
                    return null;
                }
        
        
                if( !( typeof theActualValue === "object" )) {
                    /* All other valid type options should have been already processed above.
                    Just remains to drill down into an object list elements or keyed properties
                     */
                    return aModule.VALUEDIFFATTOP;
                }
        
        
        
                var aOneLen   = theActualValue.length;
                var aOtherLen = theCheckValue.length;
        
                if( ( typeof aOneLen === "number") || ( typeof aOtherLen === "number"))  {
            
                    if( !( ( typeof aOneLen === "number") && ( typeof aOtherLen === "number"))) {
                        /* One is a list object the other is not a list object: difference can not compare deeper down
                        */
                        return aModule.VALUEDIFFATTOP;
                    }
            
            
                    /* It is a list, theCheckValue is also a list*/
            
                    if( !( aOneLen === aOtherLen)) {
                        return aModule.VALUEDIFFATTOP;
                    }
            
                    for( var aSubIdx=0; aSubIdx < aOneLen; aSubIdx++) {
                        var aOneListSub   = theActualValue[ aSubIdx];
                        var aOtherListSub = theCheckValue[ aSubIdx];
                
                        var aSubsListDiff = fgFirstDiff_inner( aOneListSub, aOtherListSub);
                        if( aSubsListDiff) {
                    
                            if( aSubsListDiff === aModule.VALUEDIFFATTOP) {
                                return [ aSubIdx];
                            }
    
                            if( !( aSubsListDiff.length)) {
                                /* Unexpected: results should e either null, VALUEDIFFATTOP, or a list of diffs, even a size 1 list.
                                 */
                                return [ aSubIdx];
                            }
                    
                            aSubsListDiff.push( aSubIdx);
                    
                            return aSubsListDiff;
                        }
                    }
            
                    return null;
                }
        
        
        
                /* None of the two objects is a list. Drill down into the object keyed properties.
                 */
                var someOneKeys   = Object.keys( theActualValue);
                var someOtherKeys = Object.keys( theCheckValue);
        
        
                var allKeys = someOneKeys.slice();
                var aNumOtherKeys = someOtherKeys.length;
        
                for( var aOtherKeyIdx=0; aOtherKeyIdx < aNumOtherKeys; aOtherKeyIdx++) {
                    var aOtherKey = someOtherKeys[ aOtherKeyIdx];
                    if( allKeys.indexOf( aOtherKey) < 0) {
                        allKeys.push( aOtherKey);
                    }
                }
                allKeys.sort();
        
        
                var aNumKeys = allKeys.length;
        
                for( var aKeyIdx=0; aKeyIdx < aNumKeys; aKeyIdx++) {
                    var aKey = allKeys[ aKeyIdx];
            
                    if( !theActualValue.hasOwnProperty( aKey)) {
                        return [ aKey];
                    }
            
                    if( !theCheckValue.hasOwnProperty( aKey)) {
                        return [ aKey];
                    }
            
            
                    var aOneSub   = theActualValue[ aKey];
                    var aOtherSub = theCheckValue[ aKey];
            
                    var aSubsDiff = fgFirstDiff_inner( aOneSub, aOtherSub);
                    if( aSubsDiff) {
                
                        if( aSubsDiff === aModule.VALUEDIFFATTOP) {
                            return [ aKey];
                        }
                
                        if( !( aSubsDiff.length)) {
                            /* Unexpected: results should e either null, VALUEDIFFATTOP, or a list of diffs, even a size 1 list.
                             */
                            return [ aKey];
                        }
                        
                        aSubsDiff.push( aKey);
                
                        return aSubsDiff;
                    }
                }
        
        
                return null;
            };
            if( fgFirstDiff_inner){}/* CQT */
            aModule.fgFirstDiff_inner = fgFirstDiff_inner;
    
    
    
    
    
    
    
    
            var fgFirstDiffFromLeft = function( theActualValue, theCheckValue) {
        
                var aDiff = fgFirstDiffFromLeft_inner( theActualValue, theCheckValue);
                if( !aDiff) {
                    return null;
                }
        
                if( aDiff === aModule.VALUEDIFFATTOP) {
                    return aModule.VALUEDIFFATTOP;
                }
        
                if( !aDiff.length) {
                    /* Unexpected: results should e either null, VALUEDIFFATTOP, or a list of diffs, even a size 1 list.
                    */
                    return aModule.VALUEDIFFATTOP;
                }
        
                var aReverseDiff = aDiff.reverse();
                if( aReverseDiff){}/* CQT */
                return aReverseDiff;
            };
            if( fgFirstDiffFromLeft){}/* CQT */
            aModule.fgFirstDiffFromLeft = fgFirstDiffFromLeft;
    
    
    
    
    
            var fgFirstDiffFromLeft_inner = function( theActualValue, theCheckValue) {
            
                if( !( typeof theCheckValue === "undefined") &&  ( theCheckValue === aModule.DONOTCOMPAREVALUESYMBOL)) {
                    return null;
                }
            
                if( ( typeof theActualValue === "undefined") && ( typeof theCheckValue === "undefined") ) {
                    return null;
                }
            
                if( ( typeof theActualValue === "undefined") || ( typeof theCheckValue === "undefined") ) {
                    return aModule.VALUEDIFFATTOP;
                }
            
                if( ( theActualValue == null) && ( theCheckValue == null)) {
                    return null;
                }
            
                if( ( theActualValue == null) || ( theCheckValue == null)) {
                    return aModule.VALUEDIFFATTOP;
                }
            
            
                if( !( ( typeof theActualValue) === ( typeof theCheckValue))) {
                    return aModule.VALUEDIFFATTOP;
                }
            
            
            
            
            
                if( typeof theActualValue === "string" ) {
                    if( theCheckValue === aModule.DONOTCOMPAREVALUESYMBOL) {
                        return null;
                    }
                    if( !( theActualValue === theCheckValue)) {
                        return aModule.VALUEDIFFATTOP;
                    }
                    return null;
                }
            
            
                if( typeof theActualValue === "number" ) {
                    if( !( theActualValue === theCheckValue)) {
                        return aModule.VALUEDIFFATTOP;
                    }
                    return null;
                }
            
            
                if( typeof theActualValue === "boolean" ) {
                    if( !( theActualValue === theCheckValue)) {
                        return aModule.VALUEDIFFATTOP;
                    }
                    return null;
                }
    
    
                if( typeof theActualValue === "function" ) {
                    if( !( theActualValue === theCheckValue)) {
                        return aModule.VALUEDIFFATTOP;
                    }
                    return null;
                }
    
    
                if( !( typeof theActualValue === "object" )) {
                    /* All other valid type options should have been already processed above.
                       Just remains to drill down into an object list elements or keyed properties
                    */
                    return aModule.VALUEDIFFATTOP;
                }
    
    
    
    
    
    
    
                var aOneLen   = theActualValue.length;
                var aOtherLen = theCheckValue.length;
    
                if( ( typeof aOneLen === "number") || ( typeof aOtherLen === "number"))  {
        
                    if( !( ( typeof aOneLen === "number") && ( typeof aOtherLen === "number"))) {
                        /* One is a list object the other is not a list object: difference can not compare deeper down
                        */
                        return aModule.VALUEDIFFATTOP;
                    }
        
        
                    /* It is a list, theCheckValue is also a list*/
        
                    if( !( aOneLen === aOtherLen)) {
                        return aModule.VALUEDIFFATTOP;
                    }
        
                    for( var aSubIdx=0; aSubIdx < aOneLen; aSubIdx++) {
                        var aOneListSub   = theActualValue[ aSubIdx];
                        var aOtherListSub = theCheckValue[ aSubIdx];
            
                        var aSubsListDiff = fgFirstDiffFromLeft_inner( aOneListSub, aOtherListSub);
                        if( aSubsListDiff) {
                
                            if( aSubsListDiff === aModule.VALUEDIFFATTOP) {
                                return [ aSubIdx];
                            }
                
                            if( !( aSubsListDiff.length)) {
                                /* Unexpected: results should e either null, VALUEDIFFATTOP, or a list of diffs, even a size 1 list.
                                 */
                                return [ aSubIdx];
                            }
                
                            aSubsListDiff.push( aSubIdx);
                
                            return aSubsListDiff;
                        }
                    }
        
                    return null;
                }
    
    
    
    
    
    
                /* None of the two objects is a list. Drill down into the object keyed properties.
                 */
    
                var someKeys   = Object.keys( theCheckValue);
            
                var aNumKeys = someKeys.length;
            
                for( var aKeyIdx=0; aKeyIdx < aNumKeys; aKeyIdx++) {
                    var aKey = someKeys[ aKeyIdx];
                
                    if( !theActualValue.hasOwnProperty( aKey)) {
                        return [ aKey];
                    }
                
                    if( !theCheckValue.hasOwnProperty( aKey)) {
                        return [ aKey];
                    }
                
                
                    var aOneSub   = theActualValue[ aKey];
                    var aOtherSub = theCheckValue[ aKey];
                
                    var aSubsDiff = fgFirstDiffFromLeft( aOneSub, aOtherSub);
                    if( aSubsDiff) {
                    
                        if( aSubsDiff === aModule.VALUEDIFFATTOP) {
                            return [ aKey];
                        }
    
    
                        if( !( aSubsDiff.length)) {
                            /* Unexpected: results should e either null, VALUEDIFFATTOP, or a list of diffs, even a size 1 list.
                             */
                            return [ aKey];
                        }
                        
                        aSubsDiff.push( aKey);
                    
                        return aSubsDiff;
                    }
                }
            
                return null;
            };
            if( fgFirstDiffFromLeft_inner){}/* CQT */
            aModule.fgFirstDiffFromLeft_inner = fgFirstDiffFromLeft_inner;
        
        
        
        
        
        
        
        
        
        
        
        
            var fgAllDiffs = function( theActualValue, theCheckValue, theIgnoreKeys, theIgnorePaths) {
            
                if( !( typeof theCheckValue === "undefined") &&  ( theCheckValue === aModule.DONOTCOMPAREVALUESYMBOL)) {
                    return null;
                }
            
                if( ( typeof theActualValue === "undefined") && ( typeof theCheckValue === "undefined") ) {
                    return null;
                }
            
                if( typeof theActualValue === "undefined") {
                    return [ fNewVoidDiff( "undefined", "UNCHECKED", "undefined", "UNCHECKED")];
                }
            
                if( typeof theCheckValue === "undefined") {
                    return [ fNewVoidDiff( theActualValue, "undefined", "something", "undefined")];
                }
            
            
                if( ( theActualValue == null) && ( theCheckValue == null)) {
                    return null;
                }
            
                if( theActualValue == null) {
                    return [ fNewVoidDiff( theActualValue, theCheckValue, "null", "something")];
                }
            
                if( theCheckValue == null) {
                    return [ fNewVoidDiff( theActualValue, theCheckValue, "something", "null")];
                }
            
            
                if( !( ( typeof theActualValue) === ( typeof theCheckValue))) {
                    return [ fNewVoidDiff( theActualValue, theCheckValue, typeof theActualValue, typeof theCheckValue)];
                }
            
            
            
            
            
                if( typeof theActualValue === "string" ) {
                    if( theCheckValue === aModule.DONOTCOMPAREVALUESYMBOL) {
                        return null;
                    }
                
                    if( !( typeof theCheckValue === "string")) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, theActualValue, "not a string")];
                    }
                
                    if( !( theActualValue === theCheckValue)) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, theActualValue, theCheckValue)];
                    }
                
                    return null;
                }
            
            
                if( typeof theActualValue === "number" ) {
                
                    if( !( typeof theCheckValue === "number")) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, theActualValue, "not a number")];
                    }
                
                    if( !( theActualValue === theCheckValue)) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, theActualValue, theCheckValue)];
                    }
                    return null;
                }
            
            
                if( typeof theActualValue === "boolean" ) {
                
                    if( !( typeof theCheckValue === "boolean")) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, theActualValue, "not a boolean")];
                    }
                
                    if( !( theActualValue === theCheckValue)) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, theActualValue, theCheckValue)];
                    }
                    return null;
                }
    
    
    
                if( typeof theActualValue === "function" ) {
        
                    if( !( typeof theCheckValue === "function")) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, theActualValue, "not a function")];
                    }
        
                    if( !( theActualValue === theCheckValue)) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, theActualValue, theCheckValue)];
                    }
                    return null;
                }
    
                
    
                if( !( typeof theActualValue === "object" )) {
                    return [ fNewVoidDiff( "an object", "UNCHECKED")];
                }
            
            
                if( !( typeof theCheckValue === "object" )) {
                    return [ fNewVoidDiff( "an object'", "not an object")];
                }
            
            
            
            
            
            
                var allDiffs = [ ];
            
            
            
                var aOneLen   = theActualValue.length;
                var aOtherLen = theCheckValue.length;
            
                if( ( typeof aOneLen === "number") || ( typeof aOtherLen === "number")) {
                
                    if( !( typeof aOneLen === "number")) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, "not an array", "UNCHECKED")];
                    }
                
                    if( !( typeof aOtherLen === "number")) {
                        return [ fNewVoidDiff( theActualValue, theCheckValue, "an array", "not an array")];
                    }
                
                    if( !( aOneLen === aOtherLen)) {
                        allDiffs.push( fNewVoidDiff( theActualValue, theCheckValue, "LEN=" + aOneLen, "LEN=" + aOtherLen));
                    }
                
                    var aMaxLen = Math.max( aOneLen, aOtherLen);
                
                    if( aMaxLen) {
                    
                        for( var aSubIdx=0; aSubIdx < aMaxLen; aSubIdx++) {
                        
                            var aOneListSub   = undefined;
                            var aOtherListSub = undefined;
                        
                            if( aSubIdx < aOneLen) {
                                aOneListSub   = theActualValue[ aSubIdx];
                            }
                        
                            if( aSubIdx < aOtherLen) {
                                aOtherListSub   = theCheckValue[ aSubIdx];
                            }
                        
                        
                            var someSubsListDiffs = fgAllDiffs( aOneListSub, aOtherListSub, theIgnoreKeys, theIgnorePaths);
                            if( someSubsListDiffs) {
                            
                                pUnshiftDiffsPath( someSubsListDiffs, aSubIdx);
                            
                                Array.prototype.push.apply( allDiffs, someSubsListDiffs);
                            }
                        }
                    }
                }
            
            
            
            
            
            
                var someOneKeysPossiblyWithNumbers   = Object.keys( theActualValue);
                var someOtherKeyPossiblyWithNumbers = Object.keys( theCheckValue);
            
                if( !( typeof someOneKeysPossiblyWithNumbers === "undefined") && !( typeof someOtherKeyPossiblyWithNumbers === "undefined")) {
                
                    var someOneKeys   = aModule.fgExcludeNumberStrings( someOneKeysPossiblyWithNumbers);
                    var someOtherKeys = aModule.fgExcludeNumberStrings( someOtherKeyPossiblyWithNumbers);
                
                
                    var allKeys = someOneKeys.slice();
                    var aNumOtherKeys = someOtherKeys.length;
                
                    for( var aOtherKeyIdx=0; aOtherKeyIdx < aNumOtherKeys; aOtherKeyIdx++) {
                        var aOtherKey = someOtherKeys[ aOtherKeyIdx];
                        if( allKeys.indexOf( aOtherKey) < 0) {
                            allKeys.push( aOtherKey);
                        }
                    }
                    allKeys.sort();
                
                
                    var aNumKeys = allKeys.length;
                
                    if( aNumKeys) {
                        for( var aKeyIdx=0; aKeyIdx < aNumKeys; aKeyIdx++) {
                            var aKey = allKeys[ aKeyIdx];
                        
                            if( theIgnoreKeys && ( theIgnoreKeys.indexOf( aKey) >=0)) {
                                continue;
                            }
                        
                            var aOneSub   = undefined;
                            var aOtherSub = undefined;
                        
                            if( theActualValue.hasOwnProperty( aKey)) {
                                aOneSub   = theActualValue[ aKey];
                            }
                        
                            if( theCheckValue.hasOwnProperty( aKey)) {
                                aOtherSub = theCheckValue[ aKey];
                            }
                        
                            var someSubsDiffs = fgAllDiffs( aOneSub, aOtherSub, theIgnoreKeys, theIgnorePaths);
                            if( someSubsDiffs) {
                            
                                pUnshiftDiffsPath( someSubsDiffs, aKey);
                            
                                Array.prototype.push.apply( allDiffs, someSubsDiffs);
                            }
                        }
                    }
                }
            
            
                var aNumAllDiffs = allDiffs.length;
                if( !aNumAllDiffs) {
                    return null;
                }
            
                return allDiffs;
            };
            if( fgAllDiffs){}/* CQT */
            aModule.fgAllDiffs = fgAllDiffs;
        
        
        
        
        
        
        
            var fNewVoidDiff = function( theOneValue, theOtherValue, theOneDisplay, theOtherDisplay) {
            
                var aDiff = {
                    "oneValue":     theOneValue,
                    "otherValue":   theOtherValue,
                    "oneDisplay":   theOneDisplay,
                    "otherDisplay": theOtherDisplay,
                    "path":         undefined,
                    "diffKind":     null
                };
                if( aDiff){}/* CQT */
            
                return aDiff;
            };
        
        
        
        
        
        
        
        
        
            var fgExcludeNumberStrings = function( theStrings) {
            
                if( !theStrings) {
                    return theStrings;
                }
            
                var aNumStrings   = theStrings.length;
                if( !aNumStrings) {
                    return theStrings;
                }
            
                var someNotNumberStrings = [ ];
            
                for( var aOneStringIdx=0; aOneStringIdx < aNumStrings; aOneStringIdx++) {
                
                    var aOneString = theStrings[ aOneStringIdx];
                    if( aOneString) {
                    
                        var aIsNumber = false;
                        try {
                            var aNumber = parseInt( aOneString);
                            aIsNumber = !isNaN( aNumber);
                        }
                        catch( anException) {}
                        if( !aIsNumber) {
                            someNotNumberStrings.push( aOneString);
                        }
                    }
                }
            
                return someNotNumberStrings;
            
            };
            if( fgExcludeNumberStrings){}/* CQT */
            aModule.fgExcludeNumberStrings = fgExcludeNumberStrings;
        
        
        
        
        
        
        
            var pUnshiftDiffsPath = function( theDiffs, theToUnshift) {
            
                if( !theDiffs) {
                    return;
                }
            
                var aNumDiffs = theDiffs.length;
                if( !aNumDiffs) {
                    return;
                }
            
                if( typeof theToUnshift === "undefined") {
                    return;
                }
            
                if( theToUnshift == null) {
                    return;
                }
            
            
                for( var aDiffIdx=0; aDiffIdx < aNumDiffs; aDiffIdx++) {
                    var aDiff = theDiffs[ aDiffIdx];
                    if( aDiff) {
                    
                        var aPath = aDiff[ "path"];
                        if( !( typeof aPath === "object")) {
                            aDiff[ "path"] = [ theToUnshift];
                        }
                        else {
                            aPath.unshift( theToUnshift);
                        
                        }
                    }
                }
            };
        
        
        
        
        
        
        
        
        
        
        
        
            var fgSetValueAtPath = function( theTarget, thePath, theValue) {
            
                if( !theTarget) {
                    return null;
                }
            
                if( !thePath) {
                    return null;
                }
            
                var someParmSteps = thePath;
            
                if( typeof someParmSteps === "string") {
                    if( someParmSteps.indexOf( aModule.TRAVERSALSTEPSSEPARATOR) >= 0) {
                        someParmSteps = someParmSteps.split( aModule.TRAVERSALSTEPSSEPARATOR);
                    }
                    else {
                        someParmSteps = [ someParmSteps];
                    }
                }
                if( !someParmSteps) {
                    return false;
                }
            
                var aNumParmSteps = someParmSteps.length;
                if( !aNumParmSteps) {
                    return false;
                }
            
            
                var aStepName = someParmSteps[ 0].trim();
            
                if( aNumParmSteps === 1) {
                    theTarget[ aStepName] = theValue;
                    return true;
                }
            
                var aModified = false;
            
                var aParmValue = theTarget[ aStepName];
                if( ( typeof aParmValue === "undefined") || ( aParmValue == null) || !( typeof aParmValue === "object")) {
                    aParmValue = { };
                    theTarget[ aStepName] = aParmValue;
                    aModified = true;
                }
            
            
                var aNumStepsToTraverse = aNumParmSteps - 1;
            
                var aSubStepValue = aParmValue;
                var aPrevSubStepValue = aSubStepValue;
            
                for( var aSubStepIdx=1; aSubStepIdx < aNumStepsToTraverse; aSubStepIdx++) {
                
                    var aSubStepName = someParmSteps[ aSubStepIdx];
                    if( aSubStepName) {
                    
                        aSubStepName = aSubStepName.trim();
                        aSubStepValue = aSubStepValue[ aSubStepName];
                    
                        if( ( typeof aSubStepValue === "undefined") || ( aSubStepValue == null) || !( typeof aSubStepValue === "object")) {
                        
                            aSubStepValue = { };
                            aPrevSubStepValue[ aSubStepName] = aSubStepValue;
                            aPrevSubStepValue = aSubStepValue;
                        }
                    }
                }
            
            
                if( !( aSubStepValue == null)) {
                
                    var aLastStepName = someParmSteps[ aNumParmSteps - 1];
                    if( aLastStepName) {
                    
                        aLastStepName = aLastStepName.trim();
                        aSubStepValue[ aLastStepName] = theValue;
                    
                        aModified = true;
                    }
                }
            
                return aModified;
            };
            if( fgSetValueAtPath){}/* CQT */
            aModule.fgSetValueAtPath = fgSetValueAtPath;
        
        
        
        
        
        
        
        
        
        
        
            var fgSetValueAtPathSymbolic = function( theTarget, thePath, theValue) {
            
                if( !theTarget) {
                    return null;
                }
            
                if( !thePath) {
                    return null;
                }
            
                var someParmSteps = thePath;
            
                if( typeof someParmSteps === "string") {
                    if( someParmSteps.indexOf( aModule.TRAVERSALSTEPSSEPARATOR) >= 0) {
                        someParmSteps = someParmSteps.split( aModule.TRAVERSALSTEPSSEPARATOR);
                    }
                    else {
                        someParmSteps = [ someParmSteps];
                    }
                }
                if( !someParmSteps) {
                    return false;
                }
            
                var aNumParmSteps = someParmSteps.length;
                if( !aNumParmSteps) {
                    return false;
                }
            
            
                var aStepName = someParmSteps[ 0].trim();
            
                if( aNumParmSteps === 1) {
                    theTarget[ aStepName] = theValue;
                    return true;
                }
            
                var aModified = false;
            
                var aParmValue = theTarget[ aStepName];
                if( ( typeof aParmValue === "undefined") || ( aParmValue == null) || !( typeof aParmValue === "object")) {
                    aParmValue = { };
                    theTarget[ aStepName] = aParmValue;
                    aModified = true;
                }
            
            
                var aNumStepsToTraverse = aNumParmSteps - 1;
            
                var aSubStepValue = aParmValue;
                var aPrevSubStepValue = aSubStepValue;
            
                for( var aSubStepIdx=1; aSubStepIdx < aNumStepsToTraverse; aSubStepIdx++) {
                
                    var aSubStepName = someParmSteps[ aSubStepIdx];
                    if( aSubStepName) {
                    
                        aSubStepName = aSubStepName.trim();
                    
                        aSubStepValue = aModule.fgSymbolicGet( aSubStepValue, aSubStepName);
                    
                        if( ( typeof aSubStepValue === "undefined") || ( aSubStepValue == null) || !( typeof aSubStepValue === "object")) {
                        
                            aSubStepValue = { };
                            aPrevSubStepValue[ aSubStepName] = aSubStepValue;
                            aPrevSubStepValue = aSubStepValue;
                        }
                    }
                }
            
            
                if( !( aSubStepValue == null)) {
                
                    var aLastStepName = someParmSteps[ aNumParmSteps - 1];
                    if( aLastStepName) {
                    
                        aLastStepName = aLastStepName.trim();
                        aSubStepValue[ aLastStepName] = theValue;
                    
                        aModified = true;
                    }
                }
            
                return aModified;
            };
            if( fgSetValueAtPathSymbolic){}/* CQT */
            aModule.fgSetValueAtPathSymbolic = fgSetValueAtPathSymbolic;
        
        
        
        
        
        
        
        
        
        
        
        
            var fgSymbolicGet = function( theTarget, theStep) {
            
                var aSymbolicStepMatch = aModule.SYMBOLICSTEPREGEXP.exec( theStep);
            
                if( !aSymbolicStepMatch) {
                
                    var aGetValue = theTarget[ theStep];
                    if( aGetValue){}/* CQT */
                    return aGetValue;
                }
            
            
                var aSymbolicKey   = aSymbolicStepMatch[ 1];
                var aSymbolicValue = aSymbolicStepMatch[ 2];
            
                if( !aSymbolicKey) {
                    return undefined;
                }
            
                if( typeof aSymbolicValue === "undefined") {
                    return undefined;
                }
            
            
                var aTargetLength = theTarget.length;
                if( !( typeof aTargetLength === "number")) {
                    return undefined;
                }
            
            
                for( var aTargetIdx=0; aTargetIdx < aTargetLength; aTargetIdx++) {
                
                    var aTarget = theTarget[ aTargetIdx];
                    if( aTarget && ( typeof aTarget === "object")) {
                    
                        var aTargetSearch = aTarget[ aSymbolicKey];
                        if( !( typeof aTargetSearch === "undefined")) {
                        
                            if( aTargetSearch === aSymbolicValue) {
                            
                                return aTarget;
                            }
                        }
                    }
                }
            
                return undefined;
            
            };
            if( fgSymbolicGet){}/* CQT */
            aModule.fgSymbolicGet = fgSymbolicGet;
        
        
        
        
        
        
        
        
            var fgDeepCopy = function( theSource) {
            
                if( ( typeof theSource === "undefined") || ( theSource == null) || ( typeof theSource === "number") || ( typeof theSource === "string") || ( typeof theSource === "boolean")) {
                    return theSource;
                }
            
            
                if( typeof theSource.length === "number") {
                    return aModule.fgDeepCopy_List( theSource)
                }
            
            
                return aModule.fgDeepCopy_Object( theSource)
            
            };
            if( fgDeepCopy){}/* CQT */
            aModule.fgDeepCopy = fgDeepCopy;
        
        
        
        
        
        
        
        
        
        
            var fgDeepCopy_List = function( theSource) {
            
                if( ( typeof theSource === "undefined") || ( theSource == null) || ( typeof theSource === "number") || ( typeof theSource === "string") || ( typeof theSource === "boolean")) {
                    return theSource;
                }
            
                if( !( typeof theSource === "object")) {
                    return undefined;
                }
            
                var aNumElements = theSource.length;
            
                if( !( typeof aNumElements === "number")) {
                    return undefined;
                }
            
            
                var aDeepCopy = [ ];
            
                for( var anElementIdx=0; anElementIdx < aNumElements; anElementIdx++) {
                
                    var anElement = theSource[ anElementIdx];
                
                    if( ( typeof anElement === "undefined") || ( anElement == null) || ( typeof anElement === "number") || ( typeof anElement === "string") || ( typeof anElement === "boolean")) {
                        aDeepCopy.push( anElement);
                        continue;
                    }
                
                    var aDeepCopiedElement = aModule.fgDeepCopy( anElement);
                    if( aDeepCopiedElement){}/* CQT */
                
                    aDeepCopy.push( aDeepCopiedElement);
                }
            
            
                return aDeepCopy;
            
            };
            if( fgDeepCopy_List){}/* CQT */
            aModule.fgDeepCopy_List = fgDeepCopy_List;
        
        
        
        
        
        
        
        
        
            var fgDeepCopy_Object = function( theSource) {
            
                if( ( typeof theSource === "undefined") || ( theSource == null) || ( typeof theSource === "number") || ( typeof theSource === "string") || ( typeof theSource === "boolean")) {
                    return theSource;
                }
            
                if( !( typeof theSource === "object")) {
                    return undefined;
                }
            
                var aDeepCopy = { };
            
                var someKeys = Object.keys( theSource);
                if( !someKeys) {
                    return aDeepCopy;
                }
            
                var aNumKeys = someKeys.length;
                if( !aNumKeys) {
                    return theSource;
                }
            
            
                for( var aKeyIdx=0; aKeyIdx < aNumKeys; aKeyIdx++) {
                
                    var aKey = someKeys[ aKeyIdx];
                
                    var aKeyInt = undefined;
                    try {
                        aKeyInt = parseInt( aKey);
                    }
                    catch( anException) {
                    }
                    if( ( typeof aKeyInt === "number") && !isNaN( aKeyInt)) {
                        continue;
                    }
                
                
                    if( theSource.hasOwnProperty( aKey)) {
                    
                        var anElement = theSource[ aKey];
                    
                        if( ( typeof anElement === "undefined") || ( anElement == null) || ( typeof anElement === "number") || ( typeof anElement === "string") || ( typeof anElement === "boolean")) {
                            aDeepCopy[ aKey] = anElement;
                            continue;
                        }
                    
                        var aDeepCopiedElement = aModule.fgDeepCopy( anElement);
                        if( aDeepCopiedElement){}/* CQT */
                    
                        aDeepCopy[ aKey] = aDeepCopiedElement;
                    }
                }
            
            
                return aDeepCopy;
            
            };
            if( fgDeepCopy_Object){}/* CQT */
            aModule.fgDeepCopy_Object = fgDeepCopy_Object;
        
        
        
        
        
        
        
        
        
        
        
        
        
        
            var fgDictFromListByKey = function( theList, theKeyPropertyName) {
            
                if( !theList) {
                    return {};
                }
            
                if( !theKeyPropertyName) {
                    return {};
                }
            
                var aDict = { };
            
                var aNumElems = theList.length;
                if( !aNumElems) {
                    return {};
                }
            
                for( var anElemIdx=0; anElemIdx < aNumElems; anElemIdx++) {
                
                    var anElem = theList[ anElemIdx];
                    if( ( typeof anElem === "object") && !( anElem == null)) {
                    
                        var aKey = anElem[ theKeyPropertyName];
                        if( ( typeof aKey === "number") || ( typeof aKey === "string") || ( typeof aKey === "boolean")) {
                        
                            aDict[ aKey] = anElem;
                        }
                    }
                }
            
                return aDict;
            
            };
            if( fgDictFromListByKey){}/* CQT */
            aModule.fDictFromListByKey = fgDictFromListByKey;
        
        
        
        
        
        
        
        
        
            var fgDictFromListByKey_AsLists = function( theList, theKeyPptyName) {
            
                if( !theList) {
                    return null;
                }
            
                var aNumElems = theList.length;
                if( !aNumElems) {
                    return {};
                }
            
                if( !theKeyPptyName) {
                    return {};
                }
            
            
                var aDict = { };
            
                for( var anElemIdx=0; anElemIdx < aNumElems; anElemIdx++) {
                
                    var anElem = theList[ anElemIdx];
                    if( anElem) {
                    
                        var aKey = anElem[ theKeyPptyName];
                        if( !( typeof aKey === "undefined") && !( aKey == null)) {
                        
                        
                            var someForKey = aDict[ aKey];
                            if( !someForKey) {
                                someForKey = [ ];
                                aDict[ aKey] = someForKey;
                            }
                        
                            if( someForKey.indexOf( anElem) < 0) {
                                someForKey.push( anElem);
                            }
                        }
                    }
                }
            
                return aDict;
            };
            if( fgDictFromListByKey_AsLists){}/* CQT */
            aModule.fgDictFromListByKey_AsLists = fgDictFromListByKey_AsLists;
        
        
        
        
        
        
        
        
        
        
            var fgDictFromListByKeyPath = function( theList, theKeyPath) {
            
                if( !theList) {
                    return null;
                }
            
                var aNumElems = theList.length;
                if( !aNumElems) {
                    return {};
                }
            
                if( !theKeyPath) {
                    return {};
                }
            
                if( theKeyPath.indexOf( ".") < 0) {
                    return fgDictFromListByKey_AsLists( theList, theKeyPath);
                }
            
                var aDict = { };
            
                for( var anElemIdx=0; anElemIdx < aNumElems; anElemIdx++) {
                
                    var anElem = theList[ anElemIdx];
                    if( anElem) {
                    
                    
                        var aTraversalResult = theSS_Te2estTraversals.fgTraverseToFromValue( theKeyPath, anElem);
                        if( aTraversalResult) {
                        
                            var aKey = aTraversalResult[ "value"];
                            if( !( typeof aKey === "undefined") && !( aKey == null)) {
                            
                                aDict[ aKey] = anElem;
                            }
                        }
                    }
                }
            
                return aDict;
            };
            if( fgDictFromListByKeyPath){}/* CQT */
            aModule.fgDictFromListByKeyPath = fgDictFromListByKeyPath;
        
        
        
        
        
        
        
        
        
            var fgCollectProperty = function( theList, thePptyName) {
            
                if( !theList) {
                    return null;
                }
            
                if( !thePptyName) {
                    return null;
                }
            
                var aNumElems = theList.length;
                if( !aNumElems) {
                    return [ ];
                }
            
                if( !thePptyName) {
                    return [ ];
                }
            
            
                var aList = [ ];
            
                for( var anElemIdx=0; anElemIdx < aNumElems; anElemIdx++) {
                
                    var anElem = theList[ anElemIdx];
                    if( anElem) {
                    
                        var aValue = anElem[ thePptyName];
                        if( !( typeof aValue === "undefined") && !( aValue == null)) {
                        
                            if( aList.indexOf( aValue) < 0) {
                                aList.push( aValue);
                            }
                        }
                    }
                }
            
                return aList;
            };
            if( fgCollectProperty){}/* CQT */
            aModule.fgCollectProperty = fgCollectProperty;
        
        
        
        
        
        
        
        
            var pgPushIntoIfNotAlready = function( theTargetList, theSourceList) {
            
                if( !theTargetList) {
                    return;
                }
            
                if( !theSourceList) {
                    return;
                }
            
                var aNumElems = theSourceList.length;
                if( !aNumElems) {
                    return;
                }
            
                for( var anElemIdx=0; anElemIdx < aNumElems; anElemIdx++) {
                
                    var anElem = theSourceList[ anElemIdx];
                    if( !(typeof anElem === "undefined")) {
                    
                        if( theTargetList.indexOf( anElem) < 0) {
                            theTargetList.push( anElem);
                        }
                    }
                
                }
            };
            if( pgPushIntoIfNotAlready){}/* CQT */
            aModule.pgPushIntoIfNotAlready = pgPushIntoIfNotAlready;
        
        
        
        
        
        
        
        
        
        
            var fgCollectPath = function( theList, thePath) {
            
                if( !theList) {
                    return null;
                }
            
                if( !thePath) {
                    return null;
                }
            
                var aNumElems = theList.length;
                if( !aNumElems) {
                    return [ ];
                }
            
                if( !thePath) {
                    return [ ];
                }
            
            
                var aList = [ ];
            
                for( var anElemIdx=0; anElemIdx < aNumElems; anElemIdx++) {
                
                    var anElem = theList[ anElemIdx];
                    if( anElem) {
                    
                        var aTraversalResult = theS_Te2estTraversals.fgTraverseToFromValue( thePath, anElem);
                        if( aTraversalResult) {
                            var aValue = aTraversalResult[ "value"];
                        
                            if( !( typeof aValue === "undefined") && !( aValue == null)) {
                            
                                if( aList.indexOf( aValue) < 0) {
                                    aList.push( aValue);
                                }
                            }
                        }
                    }
                }
            
                return aList;
            };
            if( fgCollectPath){}/* CQT */
            aModule.fgCollectPath = fgCollectPath;
        
        
        
        
        
        
        
            return aModule;
        };
    
    
    
    
    
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry_svce === 'undefined')
            && ( typeof theSS_typesregistry_svce.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry_svce.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_overrider_type
            );
        
            aModule.ModuleBuilder = aMod_builder;
            aModule.ModuleDecompiler  = function() { aModule.ModuleSource = aMod_builder.toString()};
        
            anExistingModule = aModule;
        
            if(    !( typeof theSS_typesregistry_svce === 'undefined')
                && ( typeof theSS_typesregistry_svce.fRegisterModule === 'function')) {
                theSS_typesregistry_svce.fRegisterModule( ModuleFullName, aModule);
            }
        }
    
    
    
    
        return anExistingModule;
    
    });
    
    
    
    if( !( typeof angular === 'undefined') && angular.module) {
        // Angular (1.x)
        
        angular.module("traversals",
            [
                'typesRegistry',
                'modbootTypes'
            ]).factory(
                "Traversals",
            [
                "TypesRegistrySvce",
                "OverriderSvce",
                aMod_definer
            ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry_svce  = require('../modboot/typesregistry');
            var aM_overrider      = require('../modboot/overrider_svce');
            
            return aMod_definer(
                aM_typesregistry_svce,
                aM_overrider
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define("m_traversals", [
                "m_typesregistry_svce",
                "m_overrider_svce"
            ],
            aMod_definer
           );
    }
    else if ( !(typeof nomod === 'undefined') && nomod.register) {
        // nomod toy module definition, resolution and dependency injection
    
        nomod.register( ComponentName, ModulePackages, ModuleName,
            [ /* theDependencies */
                nomod.fComputeFullName( "prettytype", "typesregistry", "typesregistry_type"),
                nomod.fComputeFullName( "prettytype", "modboot", "overrider_svce")
            ],
            aMod_definer
        );
    
    }
    
})();



;'use strict';

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
    
    
    var ComponentName    = "prettytype";
    var ModuleName     = "checks";
    var ModulePackages = "utils";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    
    var aMod_definer = function( theSS_typesregistry_svce,
                                 theSS_overrider_type){
    
        var aMod_builder = function( theS_overrider_type) {
    
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
        
        
        
        
            var pgInitWithModuleVariations = function( theToInit) {
            
                if( !theToInit) {
                }
            
            };
        
        
        
        
        
            var InitFromModuleVariations = function( theToInit) {
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
            theS_overrider_type.pOverrideModuleVariations( ModuleFullName, ModuleVariations);
    
    
    
    
    
    
    
    
    
            /* ***************************************************************
               Init here key-value pairs, considered constants - and therefore with an expected read-only life-cycle.
               Constants can be accessed through the Module .ModuleConstants.
            */
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
    
    
            /* ***************************************************************
               Holder of name-values in the Module, considered Constants.
            */
            var ModuleConstants = {};
            InitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);
    
    
    
    
            /* ***************************************************************
               Just copy each key-value in ModuleConstants onto the supplied object.
               Used to fill the Module object and the Prototype object with the key-value pairs in Constants.
             */
            var InitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }
            
                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };
    
    
    
    
    
            /* ***************************************************************
               Init here name-values, considered Globals - and therefore with an expected read-write life-cycle.
               Globals can only be accessed through the Module .ModuleGlobals. Instances may access this._v_Module.ModuleGlobals
            */
            var InitModuleGlobalsOn = function( theToInit) {
        
                if( !theToInit) {
                }
            };
    
    
    
    
            /* ***************************************************************
              Holder of name-values in the Module, considered Globals.
            */
            var ModuleGlobals = { };
            InitModuleGlobalsOn( ModuleGlobals);
    
    
    
    
            var aModule = {};
            InitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ComponentName     = ComponentName;
            aModule.ModuleName      = ModuleName;
            aModule.ModulePackages  = ModulePackages;
            aModule.ModuleFullName  = ModuleFullName;
            aModule.ModuleVariations= ModuleVariations;
            aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.InitFromModuleConstants  = InitFromModuleConstants;
            aModule.InitFromModuleVariations = InitFromModuleVariations;
            aModule.InitModuleGlobalsOn      = InitModuleGlobalsOn;
        
        
        
        
        
        
        
        
        
        
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
        if(    !( typeof theSS_typesregistry_svce === 'undefined')
            && ( typeof theSS_typesregistry_svce.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry_svce.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_overrider_type
            );
        
            aModule.ModuleBuilder = aMod_builder;
            aModule.ModuleDecompiler  = function() { aModule.ModuleSource = aMod_builder.toString()};
        
            anExistingModule = aModule;
        
            if(    !( typeof theSS_typesregistry_svce === 'undefined')
                && ( typeof theSS_typesregistry_svce.fRegisterModule === 'function')) {
                theSS_typesregistry_svce.fRegisterModule( ModuleFullName, aModule);
            }
        }
    
    
    
        return anExistingModule;
    
    };
    

 
    if( !( typeof angular === 'undefined') && angular.module) {
        // Angular (1.x)
        
        angular.module("checks",
            [
                'typesRegistry',
                'modbootTypes'
            ]).factory(
                "Checks",
            [
                "TypesRegistrySvce",
                "OverriderSvce",
                aMod_definer
            ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry_svce  = require('../modboot/typesregistry');
            var aM_overrider      = require('../modboot/overrider_svce');
            
            return aMod_definer(
                aM_typesregistry_svce,
                aM_overrider
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define("m_checks", [
                "m_typesregistry_svce",
                "m_overrider_svce"
            ],
            aMod_definer
           );
    }
    else if ( !(typeof nomod === 'undefined') && nomod.register) {
        // nomod toy module definition, resolution and dependency injection
    
        nomod.register( ComponentName, ModulePackages, ModuleName,
            [ /* theDependencies */
                nomod.fComputeFullName( "prettytype", "typesregistry", "typesregistry_type"),
                nomod.fComputeFullName( "prettytype", "modboot", "overrider_svce")
            ],
            aMod_definer
        );
    
    }
    
})();

;'use strict';

/*
 * identifying_types.js
 *
 * Created @author Antonio Carrasco Valero 201409301544
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
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

'use strict';

if( !( typeof angular === 'undefined') && angular.module) {
    // Angular (1.x)
    
    angular.module("identifying", [
        "typesregistry",
        "overrider"
    ]);
    
}





;/*
 * identifier_type.js
 *
 * Created @author Antonio Carrasco Valero 201410030300
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

'use strict';

(function () {
    
    var ComponentName  = "prettytype";
    var ModuleName     = "identifier_type";
    var ModulePackages = "identifying";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var TypeName       = "Identifier";
    
    var aMod_definer = function( theSS_typesregistry_svce,
                                 theSS_overrider_svce) {
        
        var aMod_builder = function( theS_overrider_svce) {
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    
    
            /* ***************************************************************
               Init here key-value pairs.
               The key values defined as Variations may be overriden by the overrider_svce singleton
                 with key values obtained from the command-line arguments or possibly Browser localStorage,
                 or by key-values in an "override" or a "custom" object
                 initialised in the corresponding variables of the overrider_svce singleton.
               Any key-values in arguments, custom or overrides whose key is not defined in Variations
                 shall not be be copied into Variations.
               
               These key values are added to the module Constants.
               Therefore these key values, once initialised and possibly overriderm have an expected read-only life-cycle.

               Any key-values defined into Constants with same key as one in Variations
                 shall replace the value with same key obtained from Variations.
               
               See about Constants in the coment of pgInitWithModuleConstants() below.
            */
            var pgInitWithModuleVariations = function( theToInit) {
                
                if( !theToInit) {
                }
            };
    
    
    
    
    
    
            /* ***************************************************************
               Just copy each key-value in ModuleVariations onto the supplied object.
               Used to fill the Module Constants object.
               
               See about Constants in the coment of pgInitWithModuleConstants() below.
            */
            var InitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };
    
    
    
            /* ***************************************************************
               Holder of name-values in the Module which may be overriden by overrider_svce singleton,
                and later copied into Constants.
            */
            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
    
            /* ***************************************************************
               Override key-values in Variations by the overrider_svce singleton
                 with key values obtained from the command-line arguments or possibly Browser localStorage,
                 or by key-values in an "override" or a "custom" object .
            */
            theS_overrider_svce.pOverrideModuleVariations( ModuleFullName, ModuleVariations);
    
    
    
    
    
    
    
    
    
            /* ***************************************************************
               Init here key-value pairs, considered constants - and therefore with an expected read-only life-cycle.
               Constants can be accessed through the Module .ModuleConstants.
               
               If the Module defines a prototype:
              
                   Instances of the prototype also have same access this._v_Module.ModuleConstants.
                   Instances of the prototype are those created with new <prototypename>_Constructor.
                   
                   Any sub-prototypes defined in other modules and their instances shall have a different _v_Module and therefore different constants,
                   
                   Any sub-prototype in other module and their instances may traverse upwards the prototype chain
                   through the prototype _v_SuperPrototype property until reaching the prototype of the desired Module,
                   or directly access the desired module through the property _v_Prototype_<prototypename>.
                   From the chosen prototype it is possible to access aModule.ModuleConstants
                   (Sub-prototypes are prototypes based on objects created with this module's
                   new <prototypename>_SuperPrototypeConstructor) and transitively all their sub-prototypes.
                   
                   
                   The key-values in a prototype's module ModuleConstants shall be copied onto the prototype object
                   which then hold key-value pairs for all keys in ModuleConstants, with the initial values same as in the ModuleConstants,
                   but these values may be changed in the prototype object.
                   The prototype may access each constant defined in ModuleConstants
                   as this.<CONSTANT_NAME> or this["<CONSTANT_NAME>"] .
                   
                   All sub-prototypes defined in other modules and their instances
                   may also access this.<CONSTANT_NAME> or this["<CONSTANT_NAME>"]
                   the key-values defined in any prototype recursively upwards the prototype hierarchy
                   and therefore to the key-values copied into each prototype object from their respective module ModuleConstants.
            */
            var pgInitWithModuleConstants = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
                theToInit.IDENTIFIER_DEFAULTTITLE = "Identifier_DefaultName";
            };
    
    
    
            /* ***************************************************************
               Holder of name-values in the Module, considered Constants.
            */
            var ModuleConstants = {};
            InitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);
    
    
    
    
            /* ***************************************************************
               Just copy each key-value in ModuleConstants onto the supplied object.
               Used to fill the Module object and the Prototype object with the key-value pairs in Constants.
             */
            var InitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };
    
    
    
    
    
    
    
    
    
    
    
    
            /* ***************************************************************
               Init here name-values, considered Globals - and therefore with an expected read-write life-cycle.
               Globals can only be accessed through the Module .ModuleGlobals. Instances may access this._v_Module.ModuleGlobals
               
                If the Module defines a prototype:
              
                   Instances of the prototype also have same access this._v_Module.ModuleGlobals.
                   Instances of the prototype are those created with new <prototypename>_Constructor.
                   
                   Any sub-prototypes defined in other modules and their instances shall have a different _v_Module and therefore different globals,
                   
                   Any sub-prototype in other module and their instances may traverse upwards the prototype chain
                   through the prototype _v_SuperPrototype property until reaching the prototype of the desired Module,
                   or directly access the desired module through the property _v_Prototype_<prototypename>.
                   From the chosen prototype it is possible to access aModule.ModuleGlobals
                   (Sub-prototypes are prototypes based on objects created with this module's
                   new <prototypename>_SuperPrototypeConstructor) and transitively all their sub-prototypes.
            */
            var InitModuleGlobalsOn = function( theToInit) {
                
                if( !theToInit) {
                }
            };
    
    
    
    
            /* ***************************************************************
              Holder of name-values in the Module, considered Globals.
            */
            var ModuleGlobals = { };
            InitModuleGlobalsOn( ModuleGlobals);
    
    
    
    
    
    
            /* ***************************************************************
              Returns an object which shall be used as prototype in constructor functions
              <TypeName>_Constructor and <TypeName>_SuperPrototypeConstructor
              
              When the new prototype shall have no super-prototype, the object is created as new Object() or literal {}.
              
              When the new prototype shall have a super-prototype, the object is created by invoking a constructor function
                with the super-prototype as the function prototype.
                
              Initialise metatype variables in the prototype object.
                When accessing the prototype or its instances, these values shall override same keys in the super-prototype, if any.
                
              Invoked by ProtoFactory as the first step to produce an object fully able to serve as Prototype.
            */
            var Identifier_ProtoInstancer = function() {
        
                var aPrototype = {} /* Prototypical inheritance from NOTHING */;
        
                aPrototype._v_Kind                    = "prototype";
                aPrototype._v_SuperPrototype          = null;
                aPrototype._v_Type                    = TypeName;
                aPrototype._v_Prototype_Identifier       = aPrototype;
                /* Shall be filled below, at the end of the function enclosing this (aMod_builder), when aModule is defined */
                aPrototype._v_Module                  = null;
        
                return aPrototype;
            };
    
    
    
    
    
            /* ***************************************************************
              In modules defining a prototype: Initialise with the desired value the slots for all prototype scoped properties,
                  I.e. same read value shared among all the instances.
                  The supplied object is expected to be used as prototype (assigned as prototype to constructor functions
                  <TypeName>_Constructor and <TypeName>_SuperPrototypeConstructor)
              
              Read access:
                this.<VariableName> or this["<VariableName>"]
                These variables shall be accessible for read to the prototype, its instance, sub-prototypes and their instances,
                    and the same identical value or object reference shall be obtained from all the accesses
                    unless a value with same key has been set in intermediate prototypes or the accessed object.
              
              Write access:
                On the prototype object which was supplied to this function Identifier_CreatePrototypeSlotsOn
                    this.<VariableName> = <new value> or this["<VariableName>"] = <new value>
                    The same identical newly set value or object reference shall shall be obtained from all the accesses
                    unless a value with same key has been set in intermediate prototypes or the accessed object.
                
                On instances of the prototype:
                    this.<VariableName> = <new value> or this["<VariableName>"] = <new value>
                    Shall create a new, slot in the instance which is different from the one in the instance prototype,
                    and may hold whichever value or reference.
                    From the moment the slot is set in the instance, the value or reference obtained by read access
                        this.<VariableName> or this["<VariableName>"]
                        shall not be the value or reference held by the prototype in a slot of same property name,
                        but the value set in the instance.
                    All other instance of the prottype still read the value in the prototype slot,
                        or their own value for same property name slot, if any set.

                On sub-prototypes and their instances:
                    this.<VariableName> = <new value> or this["<VariableName>"] = <new value>
                    Shall create a new, slot in the instance which is different from the one in the instance prototype,
                    and may hold whichever value or reference, similarly to the case "On instances of the prototype" above.
                    
              Invoked by ProtoFactory as one of the steps to produce an object fully able to serve as Prototype.
            */
            var Identifier_CreatePrototypeSlotsOn = function( theFrame) {
                if( !theFrame) {
                }
            };
    
    
    
    
            /* ***************************************************************
              In modules defining a prototype: Initialise with null value the slots for all instance scoped properties
                in the the supplied object.
                  I.e. the value is owned exclusively by its instance.
                  The supplied object is expected to be used as an instance
                    as created by invocation of the Constructor or SuperPrototypeConstructor
                    
              Instances of the prototype shall be able to read and write each its own values on these slots.
              
              Instances of any sub-prototypes of this prototype (thus created with SuperPrototypeConstructor):
                Shall be able to read these instance slots with exactly the same value held by the prototype object.
              
              If a property of same value is set in an instance of any sub-prototypes of this prototype:
                Shall create a new slot in the instance with whichever value or reference,
                  and the value held by the super-prototype object shall no longer be accessible
                  unless navigating up the prototypical inheritance tree through the _v_SuperPrototype property.
                
              Invoked by Constructor and SuperPrototypeConstructor and as one of the steps to produce an object
                fully able to serve as instance of this prototype, or as super-prototype for derived prototypes.
            */
            var Identifier_CreateInstanceSlotsOn = function( theFrame) {
                if( !theFrame) {
                    return;
                }
                theFrame._v_Id    = null;
                theFrame._v_Title = null;
    
                theFrame._v_IdsCounter = null;
            };
    
    
    
    
    
            /* ***************************************************************
              In modules defining a prototype: Initialise in the supplied object the methods in the prototype,
                and possibly other private functions or variables.
                
              Must include a definition of _pInit_<TypeName> to be used from the Constructor to initialise instances.
              
              If the prototype has a super-prototype then the _pInit_<TypeName> method shall delegate
                in the initialiser of the super-prototype_pInit_<SuperPrototype TypeName>
                
              Instances of the prototype shall be able to invoke these methods.

              Instances of any sub-prototypes of this prototype (thus created with SuperPrototypeConstructor):
                Shall be able to invoke these methods.
              
              If a sub-prototype defines a method with same name as one in any of its super-prototypes
                recursively upwards the prototypical inheritance tree,
                instances of the sub-prototype and their recursive sub-prototypes shall be able to access the
                method as implemented by the prototype most immediately implementing the function,
                and any methods of same name defined upwards the prototypical inheritance tree shall not be accesible
                unless navigating up the prototypical inheritance tree through the _v_SuperPrototype property.
                
              Invoked by ProtoFactory as the last step to produce an object fully able to serve as Prototype.
            */
            var Identifier_ProtoDefinerOn = function( thePrototype) {
    
                if( !thePrototype) {
                    return;
                }
    
                var _pInit = function( theTitle) {
                    
                    this._pInit_Identifier( theTitle);
                };
                if( _pInit){}/* CQT */
                thePrototype._pInit = _pInit;
                
                
                
                
                
                
                var _fTitleDefault = function( ) {
                    
                    return this.IDENTIFIER_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                thePrototype._fTitleDefault = _fTitleDefault;
                
                
                
                
                
                
                var _pInit_Identifier = function( theTitle) {
                    
                    this._v_Id    = null;
                    
                    this._v_Title = theTitle;
                    if( !this._v_Title) {
                        this._v_Title = this._fTitleDefault();
                    }
                    
                    this._v_IdsCounter = 0;
                    
                    this._v_Id = this.fReserveId();
                    
                };
                if( _pInit_Identifier){}/* CQT */
                thePrototype._pInit_Identifier = _pInit_Identifier;
                
                
                
                
                
                
                var fFullTypeNameString = function() {
                    
                    var aFullTypeName = this._v_Module.ModuleFullName + "." + this._v_Type;
                    if( aFullTypeName){}/* CQT */
                    
                    return aFullTypeName;
                };
                if( fFullTypeNameString){}/* CQT */
                thePrototype.fFullTypeNameString = fFullTypeNameString;
                
                
                
                
                
                
                var fIdentifyingJSON = function() {
                    
                    var aIdentifiyingJSON = {
                        "module": this._v_Module.ModuleFullName,
                        "type": this._v_Type,
                        "id": this._v_Id
                    };
                    if( aIdentifiyingJSON){}/* CQT */
                    return aIdentifiyingJSON;
                };
                if( fIdentifyingJSON){}/* CQT */
                thePrototype.fIdentifyingJSON = fIdentifyingJSON;
                
                
                
                
                
                
                var fIdentifyingString = function() {
                    
                    var aIdentifyingJSON = this.fIdentifyingJSON();
                    
                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_while_fIdentifyingString_JSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */
                    
                    return aIdentifyingString;
                };
                if( fIdentifyingString){}/* CQT */
                thePrototype.fIdentifyingString = fIdentifyingString;
                
                
                
                
                
                
                
                var fIdentifyingWithTitleJSON = function() {
                    
                    var aIdentifyingJSON = this.fIdentifyingJSON();
                    
                    aIdentifyingJSON[ "title"] = this._v_Title;
                    
                    return aIdentifyingJSON;
                };
                if( fIdentifyingWithTitleJSON){}/* CQT */
                thePrototype.fIdentifyingWithTitleJSON = fIdentifyingWithTitleJSON;
                
                
                
                
                
                
                var fIdentifyingWithTitleString = function() {
                    
                    var aIdentifyingJSON = this.fIdentifyingWithTitleJSON();
                    
                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_while_fIdentifyingWithTitleString_JSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */
                    
                    return aIdentifyingString;
                };
                if( fIdentifyingWithTitleString){}/* CQT */
                thePrototype.fIdentifyingWithTitleString = fIdentifyingWithTitleString;
                
                
                
                
                
                
                
                
                
                
                var fToResultJSON = function( theCommonObjects, theAlready) {
                    if( !( theAlready == null)) {
                        if( ( typeof theAlready.fAlready === "function") && theAlready.fAlready( this)){
                            return this.fIdentifyingJSON();
                        }
                    }
                    
                    var aResultJSON = this.fIdentifyingWithTitleJSON();
                    if( aResultJSON){}/* CQT */
                    
                    return aResultJSON;
                };
                if( fToResultJSON){}/* CQT */
                thePrototype.fToResultJSON = fToResultJSON;
                
                
                
                
                
                
                
                
                
                
                var fReserveId = function() {
                    
                    this._v_IdsCounter += 1;
                    
                    var anId = this._v_IdsCounter;
                    
                    return anId.toString();
                };
                if( fReserveId){}/* CQT */
                thePrototype.fReserveId = fReserveId;
                
                
            };
    
    
    
    
    
            /* ***************************************************************
              Create object to serve as prototype,
                 with all slots for Constants (and Variations), prototype scoped properties and methods of the prototype.
            */
            var Identifier_ProtoFactory = function() {
        
                /* Create object to serve as prototype */
                var aPrototype = Identifier_ProtoInstancer();
        
                /* Fill the object to serve as prototype with key-values copied from ModuleConstants,
                    which also include those from ModuleVariations */
                InitFromModuleConstants( aPrototype);
        
                /* Create in the object to serve as prototype the slots for properties scoped to the prototype.
                    I.e. same read value shared among all the instances */
                Identifier_CreatePrototypeSlotsOn( aPrototype);
        
                /* Create in the object to serve as prototype the methods implemented by the prototype.
                   Nothing prevents, other than self-discipline, to create additional slots in the prototype during this ProtoDefinerOn function. */
                Identifier_ProtoDefinerOn( aPrototype);
        
                return aPrototype;
            };
    
    
    
    
    
            /* ***************************************************************
              Object to serve as prototype
            */
            var aIdentifier_Prototype = Identifier_ProtoFactory();
    
    
    
    
            /* ***************************************************************
              Constructor function. Create a new instance object of the prototype,
                expected to be used as an object and not a super-prototype,
                fully initialised by _pInit_Xxxx, including initialisers defined by super-prototypes.
                by delegation into the super-prototype _pInit_Xxx,
                and recursively upwards in the prototype inheritance tree
                through the _v_SuperPrototype chain.
                
              See examples of recursive initialisation in modules
                identifying / dumpingpolicy and recordingpolicy
            */
            var Identifier_Constructor = function( theTitle) {
                this._v_Kind      = "instance";
                this._v_Prototype = aIdentifier_Prototype;
        
                /* Create in the object to serve as prototype the slots for properties scoped uniquely to the instance being created (this), if any */
                Identifier_CreateInstanceSlotsOn( this);
        
                /* Fully initialise the instance, delegating in initialisers defined by super-prototypes, if any */
                this._pInit_Identifier( theTitle);
            };
            Identifier_Constructor.prototype = aIdentifier_Prototype;
    
    
    
    
    
    
    
            /* ***************************************************************
              Create a new instance object of the prototype, expected to be used as a super-prototype,
                but not fully initialised, just the instance slots with null values.
                
              Values for the slots shall be initialised during the _pInit_Xxxx of instances of sub-prototypes
                  by delegation into the super-prototype _pInit_Xxx,
                  and recursively upwards in the prototype inheritance tree
                  through the _v_SuperPrototype chain.
              
              See examples of deep sub-prototypes and recursive initialisation in modules
                identifying / dumpingpolicy and recordingpolicy
            */
            var Identifier_SuperPrototypeConstructor = function() {
                /* When actually used as prototype in the code in some other module,
                    _v_Kind shall be assigned the value "prototype" as in this module Identifier_ProtoInstancer
                    if the author is following the patterns in this prettytype npm package, */
                this._v_Kind      = "subprototype";
                this._v_Prototype = aIdentifier_Prototype;
        
                /* Create in the object to serve as super-prototype the slots for properties scoped uniquely to the instance being created (this), if any */
                Identifier_CreateInstanceSlotsOn( this);
            };
            Identifier_SuperPrototypeConstructor.prototype = aIdentifier_Prototype;
    
    
    
    
    
            /* ***************************************************************
              Object exposed as Module, with key-values for all members published in the module.
              
              Some entries are published to facilitate hacking access to portions of logic in the module,
                  to be able to use for other purposes (mixins come into mind) i.e. constants initialiser,
                  and if the module defines any prototype: full and partial prototype creators
                  and initialisers of the slots structure of the prototype.
            */
            var aModule = {
                "_v_Kind":                                 "module",
                "ComponentName":                           ComponentName,
                "ModuleName":                              ModuleName,
                "ModulePackages":                          ModulePackages,
                "ModuleFullName":                          ModuleFullName,
                "ModuleConstants":                         ModuleConstants,
                "ModuleGlobals":                           ModuleGlobals,
        
                "InitFromModuleVariations":                InitFromModuleVariations,
                "InitFromModuleConstants":                 InitFromModuleConstants,
                "InitModuleGlobalsOn":                     InitModuleGlobalsOn,
        
                "TypeName":                                TypeName,
        
                "Identifier_ProtoInstancer":               Identifier_ProtoInstancer,
                "Identifier_ProtoDefinerOn":               Identifier_ProtoDefinerOn,
                "Identifier_ProtoFactory":                 Identifier_ProtoFactory,
                "Identifier_Constructor":                  Identifier_Constructor,
                "Identifier_SuperPrototypeConstructor":    Identifier_SuperPrototypeConstructor,
                "Identifier_CreatePrototypeSlotsOn":       Identifier_CreatePrototypeSlotsOn,
                "Identifier_CreateInstanceSlotsOn":        Identifier_CreateInstanceSlotsOn,
        
                "ProtoInstancer":                          Identifier_ProtoInstancer,
                "ProtoDefinerOn":                          Identifier_ProtoDefinerOn,
                "ProtoFactory":                            Identifier_ProtoFactory,
                "Constructor":                             Identifier_Constructor,
                "SuperPrototypeConstructor":               Identifier_SuperPrototypeConstructor,
                "CreatePrototypeSlotsOn":                  Identifier_CreatePrototypeSlotsOn,
                "CreateInstanceSlotsOn":                   Identifier_CreateInstanceSlotsOn,
        
                "Identifier_Prototype":                    aIdentifier_Prototype,
                "Prototype":                               aIdentifier_Prototype
            };
    
            /* ***************************************************************
              Add to the Module Key-Values from Constants (and Variations, if any) so they are exposed as published members.
              Beware: The value for any key in Constants (and Variations, if any)
                shall override any other slot value in the Module with same key, if such exists,
                including any infrastructural or conventional entries.
            */
            InitFromModuleConstants( aModule);
    
    
            /* ***************************************************************
              The prototype and its instances may access the module object and all its published members.
              The sub-prototypes and their instances may also reach this module through the _v_SuperPrototype chain.
            */
            aIdentifier_Prototype._v_Module = aModule;
    
    
    
            /* ***************************************************************
              Return defined module.
            */
            return aModule;
        };
    
    
    
    
        /* ***************************************************************
          Make sure that the module is built only once, and that the same instance is supplied anytime
          the module is required, as i.e. to resolve a dependency for another module.
          Attempt to retrieve a module with same name already registered in the typesregistry_svce singleton.
          If no such module exists then build the module and register it in the typesregistry_svce singleton.
        */
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry_svce === 'undefined')
            && ( typeof theSS_typesregistry_svce.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry_svce.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_overrider_svce
            );
        
            aModule.ModuleBuilder = aMod_builder;
            aModule.ModuleDecompiler  = function() { aModule.ModuleSource = aMod_builder.toString()};
        
            anExistingModule = aModule;
        
            if(    !( typeof theSS_typesregistry_svce === 'undefined')
                && ( typeof theSS_typesregistry_svce.fRegisterModule === 'function')) {
                theSS_typesregistry_svce.fRegisterModule( ModuleFullName, aModule);
            }
        }
    
    
        /* ***************************************************************
         Return the module which was already built and registered in typesregistry_svce singleton, or just built.
        */
        return anExistingModule;
    };
    
    
    
    
    
    
    /* ***************************************************************
      Define the module under various module definition libraries, all delegating in the same module definer function,
      but each obtaining their own way any dependencies needed by this module.
    */
    if( !( typeof angular === 'undefined') && angular.module) {
        // Angular (1.x)
        
        angular.module( ModulePackages).factory( ModuleName, [
            "typesregistry_svce",
            "overrider_svce",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry_svce = require('../typesregistry/typesregistry_svce');
            var aM_overrider     = require('../overrider/overrider_svce');
            
            return aMod_definer(
                aM_typesregistry_svce,
                aM_overrider
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( ModuleName,
            [
                "typesregistry_svce",
                "overrider_svce"
            ],
            aMod_definer
        );
        
    }
    else if ( !(typeof nomod === 'undefined') && nomod.register) {
        // nomod toy module definition, resolution and dependency injection
        
        nomod.register( ComponentName, ModulePackages, ModuleName,
            [ /* theDependencies */
                nomod.fComputeFullName( "prettytype", "typesregistry", "typesregistry_type"),
                nomod.fComputeFullName( "prettytype", "overrider", "overrider_svce")
            ],
            aMod_definer
        )
        
    }
    
    
})(); /* Self-executing function launches the module definition machinery upon load of the javascript file */


;/*
 * identifier_svce.js
 *
 * Created @author Antonio Carrasco Valero 201610051557
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
 {{Licensed2}}identifier_svce.js

 ***************************************************************************
 *
 */


'use strict';


(function () {
    
    var ComponentName    = "prettytype";
    var ModuleName     = "identifier_svce";
    var ModulePackages = "identifying";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    var SingletonName  = "Identifier_Service";
    
    var aMod_definer = ( function( theSS_typesregistry_svce,
                                   theSS_overrider_svce,
                                   theSS_identifier_type){
        
        
        var aMod_builder = function( theS_OverriderType,
                                     theSS_identifier_type) {
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            /* ***************************************************************
             This Module is actually delivered as a singleton instance of the prototype defined in the module.
             The module definition object itself is not actually returned as the module, but the singleton instance is,
               which has a slot _v_Module through which it is possible to access the module definition object.
            */
            var aService = new theSS_identifier_type.Identifier_Constructor( SingletonName);
            
            /* ***************************************************************
               Because this singleton becomes a registered module, fill in metainformation usually found in modules
            */
            aService._v_Kind        = "singleton";
            aService.ComponentName  = ComponentName;
            aService.ModuleName     = ModuleName;
            aService.ModulePackages = ModulePackages;
            aService.ModuleFullName = ModuleFullName;
            aService.SingletonName  = SingletonName;
            
            /* ***************************************************************
              Return the instantiated service singleton as the module object.
            */
            return aService;
        };
        
        
        
        
        /* ***************************************************************
          Make sure that the module is built only once, and that the same instance is supplied anytime
          the module is required, as i.e. to resolve a dependency for another module.
          Attempt to retrieve a module with same name already registered in the typesregistry_svce singleton.
          If no such module exists then build the module and register it in the typesregistry_svce singleton.
        */
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry_svce === 'undefined')
            && ( typeof theSS_typesregistry_svce.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry_svce.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
            
            var aModule = aMod_builder(
                theSS_overrider_svce,
                theSS_identifier_type
            );
            
            anExistingModule = aModule;
            
            if(    !( typeof theSS_typesregistry_svce === 'undefined')
                && ( typeof theSS_typesregistry_svce.fRegisterModule === 'function')) {
                theSS_typesregistry_svce.fRegisterModule( ModuleFullName, aModule);
            }
        }
        
        
        /* ***************************************************************
         Return the module which was already built and registered in typesregistry_svce singleton, or just built.
        */
        return anExistingModule;
    });
    
    
    
    
    
    /* ***************************************************************
      Define the module under various module definition libraries, all delegating in the same module definer function,
      but each obtaining their own way any dependencies needed by this module.
    */
    if( !( typeof angular === 'undefined') && angular.module) {
        // Angular (1.x)
        
        angular.module( ModulePackages).factory( ModuleName, [
            "typesregistry_svce",
            "overrider_svce",
            "identifier_type",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry_svce   = require('../typesregistry/typesregistry_svce');
            var aM_overrider_svce  = require('../overrider/overrider_svce');
            var aM_identifier_type = require('./identifier_type');
            
            return aMod_definer(
                aM_typesregistry_svce,
                aM_overrider_svce,
                aM_identifier_type
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define("identifier_svce",
            [
                "typesregistry_svce",
                "overrider_svce",
                "identifier_type"
            ],
            aMod_definer
        );
        
    }
    else if ( !(typeof nomod === 'undefined') && nomod.register) {
        // nomod toy module definition, resolution and dependency injection
        
        nomod.register( ComponentName, ModulePackages, ModuleName,
            [ /* theDependencies */
                nomod.fComputeFullName( "prettytype", "typesregistry", "typesregistry_type"),
                nomod.fComputeFullName( "prettytype", "overrider", "overrider_svce"),
                nomod.fComputeFullName( "prettytype", "identifying", "identifier_type")
            ],
            aMod_definer
        );
        
    }
    
})(); /* Self-executing function launches the module definition machinery upon load of the javascript file */




;/*
 * eventkinds_common.js
 *
 * Created @author Antonio Carrasco Valero 201610051556
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

'use strict';



(function () {
    
    var ComponentName  = "prettytype";
    var ModuleName     = "eventkinds_common";
    var ModulePackages = "eventkinds";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    var aMod_definer = ( function( theSS_typesregistry_svce,
                                   theSS_overrider_svce){
    
        var aMod_builder = function( theS_overrider_svce) {
    
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
    
    
            /* ***************************************************************
               Init here key-value pairs.
               The key values defined as Variations may be overriden by the overrider_svce singleton
                 with key values obtained from the command-line arguments or possibly Browser localStorage,
                 or by key-values in an "override" or a "custom" object
                 initialised in the corresponding variables of the overrider_svce singleton.
               Any key-values in arguments, custom or overrides whose key is not defined in Variations
                 shall not be be copied into Variations.
               
               These key values are added to the module Constants.
               Therefore these key values, once initialised and possibly overriderm have an expected read-only life-cycle.

               Any key-values defined into Constants with same key as one in Variations
                 shall replace the value with same key obtained from Variations.
               
               See about Constants in the coment of pgInitWithModuleConstants() below.
            */
            var pgInitWithModuleVariations = function( theToInit) {
        
                if( !theToInit) {
                }
            };
    
    
    
            /* ***************************************************************
               Just copy each key-value in ModuleVariations onto the supplied object.
               Used to fill the Module Constants object.
               
               See about Constants in the coment of pgInitWithModuleConstants() below.
            */
            var InitFromModuleVariations = function( theToInit) {
                if( !theToInit) {
                    return;
                }
        
                for( var aGlobalName in ModuleVariations) {
                    if( ModuleVariations.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleVariations[ aGlobalName];
                    }
                }
            };
    
    
    
    
            /* ***************************************************************
               Holder of name-values in the Module which may be overriden by overrider_svce singleton,
                and later copied into Constants.
            */
            var ModuleVariations = { };
            pgInitWithModuleVariations( ModuleVariations);
    
            /* ***************************************************************
               Override key-values in Variations by the overrider_svce singleton
                 with key values obtained from the command-line arguments or possibly Browser localStorage,
                 or by key-values in an "override" or a "custom" object .
            */
            theS_overrider_svce.pOverrideModuleVariations( ModuleFullName, ModuleVariations);
    
    
    
    
            /* ***************************************************************
               Init here key-value pairs, considered constants - and therefore with an expected read-only life-cycle.
               Constants can be accessed through the Module .ModuleConstants.
               
               If the Module defines a prototype:
              
                   Instances of the prototype also have same access this._v_Module.ModuleConstants.
                   Instances of the prototype are those created with new <prototypename>_Constructor.
                   
                   Any sub-prototypes defined in other modules and their instances shall have a different _v_Module and therefore different constants,
                   
                   Any sub-prototype in other module and their instances may traverse upwards the prototype chain
                   through the prototype _v_SuperPrototype property until reaching the prototype of the desired Module,
                   or directly access the desired module through the property _v_Prototype_<prototypename>.
                   From the chosen prototype it is possible to access aModule.ModuleConstants
                   (Sub-prototypes are prototypes based on objects created with this module's
                   new <prototypename>_SuperPrototypeConstructor) and transitively all their sub-prototypes.
                   
                   
                   The key-values in a prototype's module ModuleConstants shall be copied onto the prototype object
                   which then hold key-value pairs for all keys in ModuleConstants, with the initial values same as in the ModuleConstants,
                   but these values may be changed in the prototype object.
                   The prototype may access each constant defined in ModuleConstants
                   as this.<CONSTANT_NAME> or this["<CONSTANT_NAME>"] .
                   
                   All sub-prototypes defined in other modules and their instances
                   may also access this.<CONSTANT_NAME> or this["<CONSTANT_NAME>"]
                   the key-values defined in any prototype recursively upwards the prototype hierarchy
                   and therefore to the key-values copied into each prototype object from their respective module ModuleConstants.
            */
            var pgInitWithModuleConstants = function( theToInit) {
            
                if( !theToInit) {
                    return;
                }
            
                theToInit.EVENTKIND_NEWOBJECTCREATED        = "EVT_NEWOBJECTCREATED";
                theToInit.EVENTKIND_NEWOBJECTFAILED         = "EVT_NEWOBJECTFAILED";
            
            
                theToInit.EVENTKINDS_NOPROMISE_FAILURES = [
                    theToInit.EVENTKIND_NEWOBJECTFAILED
                ];
            
            
            
                theToInit.EVENTKINDS_NOPROMISE_NOTFAILURES = [
                    theToInit.EVENTKIND_NEWOBJECTCREATED
                ];
            
            
            
                theToInit.EVENTKINDS_NOPROMISE = [];
                Array.prototype.push.apply( theToInit.EVENTKINDS_NOPROMISE, theToInit.EVENTKINDS_NOPROMISE_NOTFAILURES);
                Array.prototype.push.apply( theToInit.EVENTKINDS_NOPROMISE, theToInit.EVENTKINDS_NOPROMISE_FAILURES);
            
            
            
            
                theToInit.EVENTKINDS_FAILURES = [ ];
                Array.prototype.push.apply( theToInit.EVENTKINDS_FAILURES, theToInit.EVENTKINDS_NOPROMISE_FAILURES);
            
            
            
            
                theToInit.EVENTKINDS_NOTFAILURES = [ ];
                Array.prototype.push.apply( theToInit.EVENTKINDS_NOTFAILURES, theToInit.EVENTKINDS_NOPROMISE_NOTFAILURES);
            
            
            
            
            
            
            
                theToInit.EVENTKINDS = theToInit.EVENTKINDS_NOPROMISE.slice();
            
            
            
                theToInit.EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE = [
                    theToInit.EVENTKIND_NEWOBJECTCREATED
                ];
            
            
            
                theToInit.EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE_NOPROMISE = theToInit.EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE.slice();
            
                theToInit.EVENTKINDS_NOTFORCONSOLE_NOPROMISE = theToInit.EVENTKINDS_NOPROMISE_NOTFAILURES.slice();
            
            
                theToInit.EVENTKINDS_NOTFORCONSOLE_NONE = [];
                theToInit.EVENTKINDS_NOTFORCONSOLE_ALL = theToInit.EVENTKINDS.slice();
            
                theToInit.EVENTKINDS_NOTFORCONSOLE_DEFAULT = theToInit.EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE_NOPROMISE.slice();
            
                theToInit.EVENTKINDS_NOTFORCONSOLE_DEFAULT = theToInit.EVENTKINDS_NOTFORCONSOLE_NONE;
            
                theToInit.EVENTKINDS_NOTFORCONSOLE_DEFAULT = theToInit.EVENTKINDS_NOTFORCONSOLE_NOPROMISE;
            
            
            
            
            
            
                theToInit.EVENTKINDS_ERRORS = [
                    theToInit.EVENTKIND_NEWOBJECTFAILED
                ];
            
            
                theToInit.EVENTKINDS_TRIGGERDUMP_ERRORS  = theToInit.EVENTKINDS_ERRORS.slice();
            
                theToInit.EVENTKINDS_TRIGGERDUMP_ALL     = theToInit.EVENTKINDS.slice();
            
                theToInit.EVENTKINDS_TRIGGERDUMP_DEFAULT = theToInit.EVENTKINDS_TRIGGERDUMP_ERRORS;
            
            
            
            };
    
    
    
            /* ***************************************************************
               Holder of name-values in the Module, considered Constants.
            */
            var ModuleConstants = {};
            InitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);
    
    
    
    
            /* ***************************************************************
               Just copy each key-value in ModuleConstants onto the supplied object.
               Used to fill the Module object and the Prototype object with the key-value pairs in Constants.
             */
            var InitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }
            
                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };
    
    
    
    
            /* ***************************************************************
               Init here name-values, considered Globals - and therefore with an expected read-write life-cycle.
               Globals can only be accessed through the Module .ModuleGlobals.
               Instances of a prototype of this module, if any, may access this._v_Module.ModuleGlobals.
               Instances of sub-prototypes of this module, if any, may traverse upwards the prototypical inheritance tree
                 through the _v_SuperPrototype property, reach the desired prototype and from it access
                 its _v_Module.ModuleGlobals
            */
            var InitModuleGlobalsOn = function( theToInit) {
        
                if( !theToInit) {
                }
            };
    
    
    
            /* ***************************************************************
              Holder of name-values in the Module, considered Globals.
            */
            var ModuleGlobals = { };
            InitModuleGlobalsOn( ModuleGlobals);
    
    
    
    
    
            /* ***************************************************************
               Object exposed as Module, with key-values for all members published in the module.
               
               Some entries are published to facilitate hacking access to portions of logic in the module,
                   to be able to use for other purposes (mixins come into mind) i.e. constants initialiser,
                   and if the module defines any prototype: full and partial prototype creators
                   and initialisers of the slots structure of the prototype.
             */
            var aModule = {
                "_v_Kind":                                 "module",
                "ComponentName":                           ComponentName,
                "ModuleName":                              ModuleName,
                "ModulePackages":                          ModulePackages,
                "ModuleFullName":                          ModuleFullName,
                "ModuleConstants":                         ModuleConstants,
                "ModuleGlobals":                           ModuleGlobals,
        
                "InitFromModuleVariations":                InitFromModuleVariations,
                "InitFromModuleConstants":                 InitFromModuleConstants,
                "InitModuleGlobalsOn":                     InitModuleGlobalsOn
            };
    
    
            /* ***************************************************************
              Add to the Module Key-Values from Constants (and Variations, if any) so they are exposed as published members.
              Beware: The value for any key in Constants (and Variations, if any)
                shall override any other slot value in the Module with same key, if such exists,
                including any infrastructural or conventional entries.
            */
            InitFromModuleConstants( aModule);
    
    
    
            /* ***************************************************************
              Return defined module.
            */
            return aModule;
        };
    
    
    
        /* ***************************************************************
          Make sure that the module is built only once, and that the same instance is supplied anytime
          the module is required, as i.e. to resolve a dependency for another module.
          Attempt to retrieve a module with same name already registered in the typesregistry_svce singleton.
          If no such module exists then build the module and register it in the typesregistry_svce singleton.
        */
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry_svce === 'undefined')
            && ( typeof theSS_typesregistry_svce.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry_svce.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_overrider_svce
            );
        
            aModule.ModuleBuilder = aMod_builder;
            aModule.ModuleDecompiler  = function() { aModule.ModuleSource = aMod_builder.toString()};
        
            anExistingModule = aModule;
        
            if(    !( typeof theSS_typesregistry_svce === 'undefined')
                && ( typeof theSS_typesregistry_svce.fRegisterModule === 'function')) {
                theSS_typesregistry_svce.fRegisterModule( ModuleFullName, aModule);
            }
        }
    
    
        /* ***************************************************************
         Return the module which was already built and registered in typesregistry_svce singleton, or just built.
        */
        return anExistingModule;
    });
    
    
    /* ***************************************************************
      Define the module under various module definition libraries, all delegating in the same module definer function,
      but each obtaining their own way any dependencies needed by this module.
    */
    if( !( typeof angular === 'undefined') && angular.module) {
        // Angular (1.x)
    
        angular.module( ModulePackages).factory( ModuleName, [
            "typesregistry_svce",
            "overrider_svce",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry_svce = require('../typesregistry/typesregistry_svce');
            var aM_overrider     = require('../overrider/overrider_svce');
    
            return aMod_definer(
                aM_typesregistry_svce,
                aM_overrider
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
    
        define( ModuleName,
            [
                "typesregistry_svce",
                "overrider_svce"
            ],
            aMod_definer
        );
        
    }
    else if ( !(typeof nomod === 'undefined') && nomod.register) {
        // nomod toy module definition, resolution and dependency injection
    
        nomod.register( ComponentName, ModulePackages, ModuleName,
            [ /* theDependencies */
                nomod.fComputeFullName( "prettytype", "typesregistry", "typesregistry_type"),
                nomod.fComputeFullName( "prettytype", "overrider", "overrider_svce")
            ],
            aMod_definer
        )
    
    }
    
})();






;'use strict';

/*
 * common_types.js
 *
 * Created @author Antonio Carrasco Valero 201409301544
 *
 *
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
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


'use strict';



if( !( typeof angular === 'undefined') && angular.module) {
    // Angular (1.x)
    
    angular.module("commonTypes", [
        "typesRegistry",
        "modbootTypes",
        "eventKinds_Common",
        "identifyingTypes",
        "traversals"
    ]);
    
    
}



;/*
 * common_type.js
 *
 * Created @author Antonio Carrasco Valero 201410030426
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

'use strict';

(function () {
    
    var ComponentName    = "prettytype";
    var ModuleName     = "common_type";
    var ModulePackages = "common";
    var ModuleFullName = ModulePackages + "/" + ModuleName;
    
    var aMod_definer = ( function( theSS_typesregistry_svce,
                                   theSS_overrider_type,
                                   theSS_IdentifierSvce,
                                   theSS_RecorderSvce,
                                   theSS_EventTypes_Common,
                                   theSS_Travesals){
        
        var aMod_builder = function( theS_overrider_type,
                                     theS_IdentifierSvce,
                                     theS_RecorderSvce,
                                     theS_EventTypes_Common,
                                     theS_Travesals) {
            
            
            if( typeof FG_logModLoads === 'function') { FG_logModLoads(ModuleFullName);}
            
            
            
            
            var pgInitWithModuleVariations = function( theToInit) {
                
                if( !theToInit) {
                    return;
                }
                
                
                /* BeWare: keeping references to record instances shall prevent reclamation of their memory by the garbage collector
                   Note that when a recordingpolicy_keepall is plugged into the recorder, all records shall be kept in memory in the _v_Records slot property of the recorder instance
                   */
                theToInit.KEEPOWNRECORDS = false;
            };
            
            
            
            
            
            var InitFromModuleVariations = function( theToInit) {
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
            theS_overrider_type.pOverrideModuleVariations( ModuleFullName, ModuleVariations);
    
    
    
    
    
    
    
    
    
            /* ***************************************************************
               Init here key-value pairs, considered constants - and therefore with an expected read-only life-cycle.
               Constants can be accessed through the Module .ModuleConstants.
               
               If the Module defines a prototype:
              
                   Instances of the prototype also have same access this._v_Module.ModuleConstants.
                   Instances of the prototype are those created with new <prototypename>_Constructor.
                   
                   Any sub-prototypes defined in other modules and their instances shall have a different _v_Module and therefore different constants,
                   
                   Any sub-prototype in other module and their instances may traverse upwards the prototype chain
                   through the prototype _v_SuperPrototype property until reaching the prototype of the desired Module,
                   or directly access the desired module through the property _v_Prototype_<prototypename>.
                   From the chosen prototype it is possible to access aModule.ModuleConstants
                   (Sub-prototypes are prototypes based on objects created with this module's
                   new <prototypename>_SuperPrototypeConstructor) and transitively all their sub-prototypes.
                   
                   
                   The key-values in a prototype's module ModuleConstants shall be copied onto the prototype object
                   which then hold key-value pairs for all keys in ModuleConstants, with the initial values same as in the ModuleConstants,
                   but these values may be changed in the prototype object.
                   The prototype may access each constant defined in ModuleConstants
                   as this.<CONSTANT_NAME> or this["<CONSTANT_NAME>"] .
                   
                   All sub-prototypes defined in other modules and their instances
                   may also access this.<CONSTANT_NAME> or this["<CONSTANT_NAME>"]
                   the key-values defined in any prototype recursively upwards the prototype hierarchy
                   and therefore to the key-values copied into each prototype object from their respective module ModuleConstants.
            */
            var pgInitWithModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                if( theS_EventTypes_Common && theS_EventTypes_Common.InitFromModuleConstants) {
                    theS_EventTypes_Common.InitFromModuleConstants( theToInit);
                }
                
                theToInit.COMMON_DEFAULTTITLE = "CommonDefaultName";
                
                theToInit.UNKNOWNID = "?i?";
                
                theToInit.VALUEDIFFATTOP = "/";
                theToInit.DONOTCOMPAREVALUESYMBOL = "@DONOTCOMPARE699@";
                
                
                
                
                
                theToInit.FIELDNAMEDOT = ".";
                
                theToInit.URLPATHSEPARATOR   = "/";
                theToInit.HTTPQUERYCHAR      = "?";
                theToInit.HTTPPARMASSIGN     = "=";
                theToInit.HTTPEXTRAPARMCHAR  = "&";
                
                
                theToInit.DATATYPE_FILE = "File";
                
            };
    
    
    
            /* ***************************************************************
               Holder of name-values in the Module, considered Constants.
            */
            var ModuleConstants = {};
            InitFromModuleVariations( ModuleConstants);
            pgInitWithModuleConstants( ModuleConstants);
    
    
    
    
            /* ***************************************************************
               Just copy each key-value in ModuleConstants onto the supplied object.
               Used to fill the Module object and the Prototype object with the key-value pairs in Constants.
             */
            var InitFromModuleConstants = function( theToInit) {
                if( !theToInit) {
                    return;
                }
                
                for( var aGlobalName in ModuleConstants) {
                    if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                        theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                    }
                }
            };
    
    
    
    
            /* ***************************************************************
               Init here name-values, considered Globals - and therefore with an expected read-write life-cycle.
               Globals can only be accessed through the Module .ModuleGlobals. Instances may access this._v_Module.ModuleGlobals
               
                If the Module defines a prototype:
              
                   Instances of the prototype also have same access this._v_Module.ModuleGlobals.
                   Instances of the prototype are those created with new <prototypename>_Constructor.
                   
                   Any sub-prototypes defined in other modules and their instances shall have a different _v_Module and therefore different globals,
                   
                   Any sub-prototype in other module and their instances may traverse upwards the prototype chain
                   through the prototype _v_SuperPrototype property until reaching the prototype of the desired Module,
                   or directly access the desired module through the property _v_Prototype_<prototypename>.
                   From the chosen prototype it is possible to access aModule.ModuleGlobals
                   (Sub-prototypes are prototypes based on objects created with this module's
                   new <prototypename>_SuperPrototypeConstructor) and transitively all their sub-prototypes.
            */
            var InitModuleGlobalsOn = function( theToInit) {
        
                if( !theToInit) {
                }
            };
    
    
    
            /* ***************************************************************
              Holder of name-values in the Module, considered Globals.
            */
            var ModuleGlobals = { };
            InitModuleGlobalsOn( ModuleGlobals);
    
    
    
    
    
            var aCommon_Prototype = (function() {
                
                
                var aPrototype = {};
                
                InitFromModuleConstants( aPrototype);
    
                aPrototype._v_IsPrototype = true;
                aPrototype._v_SuperPrototype = null;
                
                aPrototype._v_Type = "Common";
                
                aPrototype._v_Module = null;
    
                aPrototype._v_Prototype_Common = aPrototype;
    
                
                aPrototype._v_Identifier = null;
                aPrototype._v_Recorder   = null;
                
                aPrototype._v_Id    = null;
                aPrototype._v_Title = null;
                
                aPrototype._v_OwnRecords = null;
                
                
                
                
                
                
                var _pInit = function( theTitle, theIdentifier, theRecorder) {
                    
                    this._pInit_Common( theTitle, theIdentifier, theRecorder);
                };
                if( _pInit){}/* CQT */
                aPrototype._pInit = _pInit;
                
                
                
                
                
                
                
                var _fTitleDefault = function( ) {
                    
                    return this.COMMON_DEFAULTTITLE;
                };
                if( _fTitleDefault){}/* CQT */
                aPrototype._fTitleDefault = _fTitleDefault;
                
                
                
                
                
                
                
                
                var _pInit_Common = function( theTitle, theIdentifier, theRecorder) {
                    
                    this._v_Prototype = aPrototype;
                    this._v_Type      = this._v_Prototype._v_Type;
                    this._v_Module    = this._v_Prototype._v_Module;
                    
                    this._v_Identifier = theIdentifier;
                    if( !this._v_Identifier) {
                        this._v_Identifier = theS_IdentifierSvce;
                    }
                    
                    this._v_Recorder   = theRecorder;
                    if( !this._v_Recorder) {
                        this._v_Recorder = theS_RecorderSvce;
                    }
                    
                    if( this._v_Identifier) {
                        this._v_Id = this._v_Identifier.fReserveId();
                    }
                    
                    if( !this._v_Id) {
                        this._v_Id = this.UNKNOWNID;
                    }
                    
                    this._v_Title = theTitle;
                    if( !this._v_Title) {
                        this._v_Title = this._fTitleDefault();
                    }
                    
                    this._v_OwnRecords = [ ];
                };
                if( _pInit_Common){}/* CQT */
                aPrototype._pInit_Common = _pInit_Common;
                
                
                
                
                
                
                var fFullTypeNameString = function() {
                    
                    var aFullTypeName = this._v_Module.ModuleFullName + "." + this._v_Type;
                    if( aFullTypeName){}/* CQT */
                    
                    return aFullTypeName;
                };
                if( fFullTypeNameString){}/* CQT */
                aPrototype.fFullTypeNameString = fFullTypeNameString;
                
                
                
                
                
                
                
                
                var fIdentifyingJSON = function() {
                    
                    var aIdentifiyingJSON = {
                        "module": this._v_Module.ModuleFullName,
                        "type": this._v_Type,
                        "id":   this._v_Id
                    };
                    if( aIdentifiyingJSON){}/* CQT */
                    return aIdentifiyingJSON;
                };
                if( fIdentifyingJSON){}/* CQT */
                aPrototype.fIdentifyingJSON = fIdentifyingJSON;
                
                
                
                
                
                
                var fIdentifyingString = function() {
                    
                    var aIdentifyingJSON = this.fIdentifyingJSON();
                    
                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_whileJSON_stringify"
                    }
                    
                    return aIdentifyingString;
                };
                if( fIdentifyingString){}/* CQT */
                aPrototype.fIdentifyingString = fIdentifyingString;
                
                
                
                
                
                
                
                var fIdentifyingWithTitleJSON = function() {
                    
                    var aIdentifyingJSON = this.fIdentifyingJSON();
                    
                    aIdentifyingJSON[ "title"] = this._v_Title;
                    
                    return aIdentifyingJSON;
                };
                if( fIdentifyingWithTitleJSON){}/* CQT */
                aPrototype.fIdentifyingWithTitleJSON = fIdentifyingWithTitleJSON;
                
                
                
                
                
                
                var fIdentifyingWithTitleString = function() {
                    
                    var aIdentifyingJSON = this.fIdentifyingWithTitleJSON();
                    
                    var aIdentifyingString = "?";
                    try {
                        aIdentifyingString = JSON.stringify( aIdentifyingJSON);
                    }
                    catch( anException){
                        aIdentifyingString = "Error_whileJSON_stringify"
                    }
                    if( aIdentifyingString){}/* CQT */
                    
                    return aIdentifyingString;
                };
                if( fIdentifyingWithTitleString){}/* CQT */
                aPrototype.fIdentifyingWithTitleString = fIdentifyingWithTitleString;
                
                
                
                
                
                
                
                var fToResultJSON = function( theCommonObjects, theAlready) {
                    if( !( theAlready == null)) {
                        if( ( typeof theAlready.fAlready === "function") && theAlready.fAlready( this)){
                            return this.fIdentifyingJSON();
                        }
                    }
                    
                    var aResultJSON = this.fIdentifyingWithTitleJSON();
                    if( aResultJSON){}/* CQT */
                    
                    return aResultJSON;
                };
                if( fToResultJSON){}/* CQT */
                aPrototype.fToResultJSON = fToResultJSON;
                
                
                
                
                
                
                
                
                
                
                
                
                var fAsLogObject = function() {
                    
                    var aLog = this.fIdentifyingWithTitleJSON();
                    if( aLog){}/* CQT */
                    
                    return aLog;
                };
                if( fAsLogObject){}/* CQT */
                aPrototype.fAsLogObject = fAsLogObject;
                
                
                
                
                
                
                var fLogString = function() {
                    
                    var aLog = this.fAsLogObject();
                    if( aLog == null) {
                        return "";
                    }
                    
                    var aLogString = "";
                    try {
                        aLogString = JSON.stringify( aLog);
                    }
                    catch( anException) {
                        aLogString = "Error_while_fLogString_JSON_stringify"
                    }
                    
                    return aLogString;
                };
                if( fLogString){}/* CQT */
                aPrototype.fLogString = fLogString;
                
                
                
                
                /*
                var toString = function() {
                    return this.fLogString();
                };
                aPrototype.toString = toString;
                */
                
                
                
                
                
                
                
                
                
                
                
                
                var fRecord = function( theMethodName, theEventKind, theData, theReason, theDetail) {
                    
                    if( this._v_Recorder == null) {
                        return null;
                    }
                    
                    var aRecord = this._v_Recorder.fCreateAndRegisterRecord( this, theMethodName, theEventKind, theData, theReason, theDetail);
                    
                    if( this.KEEPOWNRECORDS) {
                        this._v_OwnRecords.push( aRecord);
                    }
                    
                    return aRecord;
                };
                if( fRecord){}/* CQT */
                aPrototype.fRecord = fRecord;
                
                
                
                
                
                
                
                
                
                
                /* Deprecated. Kept in support of common type pLogRecord . Use fRecord which shall invoke recorder fCreateAndRegisterRecord and take care of delegating for the record to be recorded and dumped to console */
                var pLogRecord = function( theRecord) {
                    
                    if( !theRecord) {
                        return;
                    }
                    
                    if( !this._v_Recorder) {
                        return;
                    }
                    
                    
                    this._v_Recorder.pLogRecord( theRecord);
                    
                };
                if( pLogRecord){}/* CQT */
                aPrototype.pLogRecord = pLogRecord;
                
                
                
                
                
                
                
                
                
                var fFirstDiff = function( theActualValue, theCheckValue) {
                    
                    return theS_Travesals.fgFirstDiff( theActualValue, theCheckValue);
                };
                if( fFirstDiff){}/* CQT */
                aPrototype.fFirstDiff = fFirstDiff;
                
                
                
                
                
                
                
                
                return aPrototype;
                
            })();
            
            
            
            
            var Common_Constructor = function( theTitle, theIdentifier, theRecorder) {
                this._v_IsPrototype = false;
                this._v_Prototype = aCommon_Prototype;
                
                this._v_Identifier = null;
                this._v_Recorder   = null;
    
                this._v_Id    = null;
                this._v_Title = null;
    
                this._v_OwnRecords = null;
                
                this._pInit_Common( theTitle, theIdentifier, theRecorder);
            };
            Common_Constructor.prototype = aCommon_Prototype;
            
            
            
            
            
            var Common_SuperPrototypeConstructor = function() {
                this._v_IsPrototype = true;
                this._v_Prototype = aCommon_Prototype;
    
                this._v_Identifier = null;
                this._v_Recorder   = null;
    
                this._v_Id    = null;
                this._v_Title = null;
    
                this._v_OwnRecords = null;
            };
            Common_SuperPrototypeConstructor.prototype = aCommon_Prototype;
    
    
    
            var Common_SuperPrototypeSingleton = function() {
                if( aModule.SuperPrototypeSingletonInstance) {
                    return aModule.SuperPrototypeSingletonInstance;
                }
        
                aModule.SuperPrototypeSingletonInstance = new Common_SuperPrototypeConstructor();
                return aModule.SuperPrototypeSingletonInstance;
            };
    
    
            var aModule = {
                "Common_Prototype": aCommon_Prototype,
                "Common_Constructor": Common_Constructor,
                "Common_SuperPrototypeConstructor": Common_SuperPrototypeConstructor,
                "Common_SuperPrototypeSingleton": Common_SuperPrototypeSingleton,
                "Prototype": aCommon_Prototype,
                "Constructor": Common_Constructor,
                "SuperPrototypeConstructor": Common_SuperPrototypeConstructor,
                "SuperPrototypeSingleton": Common_SuperPrototypeSingleton
            };
            InitFromModuleConstants( aModule);
            aModule._v_Type = "module";
            aModule.ComponentName     = ComponentName;
            aModule.ModuleName      = ModuleName;
            aModule.ModulePackages  = ModulePackages;
            aModule.ModuleFullName  = ModuleFullName;
            aModule.ModuleVariations= ModuleVariations;
            aModule.ModuleConstants = ModuleConstants;
            aModule.ModuleGlobals   = ModuleGlobals;
            aModule.InitFromModuleConstants  = InitFromModuleConstants;
            aModule.InitFromModuleVariations = InitFromModuleVariations;
            aModule.InitModuleGlobalsOn      = InitModuleGlobalsOn;
    
            aCommon_Prototype._v_Module = aModule;
            
            
            
            
            return aModule;
        };
        
        
        
        
        
      
    
        var anExistingModule = null;
        if(    !( typeof theSS_typesregistry_svce === 'undefined')
            && ( typeof theSS_typesregistry_svce.fRegisteredModule === 'function')) {
            anExistingModule = theSS_typesregistry_svce.fRegisteredModule( ModuleFullName);
        }
        if( !anExistingModule) {
        
            var aModule = aMod_builder(
                theSS_overrider_type,
                theSS_IdentifierSvce,
                theSS_RecorderSvce,
                theSS_EventTypes_Common,
                theSS_Travesals
            );
        
            aModule.ModuleBuilder = aMod_builder;
            aModule.ModuleDecompiler  = function() { aModule.ModuleSource = aMod_builder.toString()};
        
            anExistingModule = aModule;
        
            if(    !( typeof theSS_typesregistry_svce === 'undefined')
                && ( typeof theSS_typesregistry_svce.fRegisterModule === 'function')) {
                theSS_typesregistry_svce.fRegisterModule( ModuleFullName, aModule);
            }
        }
    
    
        
    
        return anExistingModule;
        
        
    });
    
    
    
    if( !( typeof angular === 'undefined') && angular.module) {
        // Angular (1.x)
        
        angular.module("commonTypes").factory("CommonType",[
            "TypesRegistrySvce",
            "OverriderSvce",
            "IdentifierSvce",
            "RecorderSvce",
            "EventKinds_Common",
            "Traversals",
            aMod_definer
        ]);
        
    }
    else if ( !(typeof module === 'undefined') && module.exports) {
        // Node.js
        
        module.exports = (function() {
            
            var aM_typesregistry_svce     = require('../modboot/typesregistry');
            var aM_overrider         = require('../modboot/overrider_svce');
            var aM_identifierSvce    = require('../identifying/identifier_svce');
            var aM_recorderSvce      = require('../identifying/recorder_svce');
            var aM_eventkinds_common = require('../eventkinds/eventkinds_common');
            var aM_traversals        = require('../utils/traversals');
    
            return aMod_definer(
                aM_typesregistry_svce,
                aM_overrider,
                aM_identifierSvce,
                aM_recorderSvce,
                aM_eventkinds_common,
                aM_traversals
            );
        })();
        
    }
    else if ( !(typeof define === 'undefined') && define.amd) {
        // AMD / RequireJS
        
        define( "m_common_type",
            [
                "m_typesregistry_svce",
                "m_overrider_svce",
                "m_identifier_svce",
                "m_recorder_svce",
                "m_eventkinds_common",
                "m_traversals"
            ],
            aMod_definer
           );
    }
    else if ( !(typeof nomod === 'undefined') && nomod.register) {
        // nomod toy module definition, resolution and dependency injection
    
        nomod.register( ComponentName, ModulePackages, ModuleName,
            [ /* theDependencies */
                nomod.fComputeFullName( "prettytype", "modboot",     "typesregistry"),
                nomod.fComputeFullName( "prettytype", "modboot",     "overrider_svce"),
                nomod.fComputeFullName( "prettytype", "identifying", "identifier_svce"),
                nomod.fComputeFullName( "prettytype", "identifying", "recorder_svce"),
                nomod.fComputeFullName( "prettytype", "eventkinds",  "eventkinds_common"),
                nomod.fComputeFullName( "prettytype", "utils",       "traversals")
            ],
            aMod_definer
        );
    
    }
   
    
})();






//# sourceMappingURL=prettytype.js.map