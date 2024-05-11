function ValidateForm()
{$('span.error_msg').html('');var success=true;$("#contactforms input").each(function()
{if($(this).val()=="")
{$("span.error_msg").html('<div id="formerror">Please fill in the empty fields! <input type="button" id="hideshow" value="X" /></div>');success=false;}});return success;}
jQuery(document).ready(function(){jQuery('#hideshow').live('click',function(event){jQuery('#formerror').fadeOut('slow');});});jQuery(document).ready(function(){jQuery('#hideshow').live('click',function(event){jQuery('#formsuccess').fadeOut('slow');});});
