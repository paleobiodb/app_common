//
// PBDB Dynamic content generation library
//
// Author: Michael McClennen
// 
// This code provides a library for generating dynamic content for Paleobiology Database web applications.



// Set the 'innerHTML' property of the specified element.  If the specified content is not a
// string, then the property is set to the empty string.

function setInnerHTML ( id, content )
{
    var elt = myGetElement(id);
    
    if ( elt )
    {
	if ( typeof(content) != "string" )
	    elt.innerHTML = "";
	else
	    elt.innerHTML = content;
    }
}


// The following function generates HTML code for displaying a dropdown menu of possible
// parameter values.

function makeOptionList ( options )
{
    var content = '';
    var i;
    
    if ( options == undefined || ! options.length )
    {
	return '<option value="error">ERROR</option>';
    }
    
    for ( i=0; i < options.length / 2; i++ )
    {
	var code = options[2*i];
	var label = options[2*i+1];
	
	content += '<option value="' + code + '">' + label + "</option>\n";
    }
    
    return content;
}


