
		
			function toCel(){
			//alert("It WORKS works");
			var fer=document.getElementById("Field_In").value;
			var cel=(fer-32)*5/9;
			document.getElementById("Field_out").value=cel;
			};
			function toFer(){
			//alert("It WOR2KS works");
			var cel=document.getElementById("Field_Inn").value;
			var fer=cel*9/5+32;
			document.getElementById("Field_outt").value=fer;
			};
