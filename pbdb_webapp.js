//
// PBDB Web application library
//
// Author: Michael McClennen
// 
// This code provides a user interface library for Paleobiology Database web applications.


    
// This function retrieves the DOM object with the specified id, and leaves a reasonable
// message on the console if the program contains a typo and the requested element does not
// exist.    

function myGetElement ( id )
{
    var elt = document.getElementById(id);
    
    if ( elt == undefined )
    {
	console.log("ERROR: unknown element '" + id + "'");
	return undefined;
    }
    
    else return elt;
}


// If the specified DOM object is of type "checkbox", then return the value of its 'checked'
// attribute.  Otherwise, return the value of its 'value' attribute.

function getElementValue ( id )
{
    var elt = myGetElement(id);
    
    if ( elt && elt.type && elt.type == "checkbox" )
	return elt.checked;
    
    else if ( elt )
	return elt.value;
    
    else
	return "";
}

// Set the value of the specified element.

function setElementValue( id, value )
{
    var elt = myGetElement(id);
    
    if ( elt && elt.type && elt.type == "checkbox" )
    {
	if ( value ) elt.checked = 1;
	else elt.checked = 0;
    }

    else if ( elt )
    {
	elt.value = value;
    }
}


