function checkAnswers(page){
	var form = document.getElementById("observation-form");
	switch (page) {
		case 1: 
			var rows = $(form).find("tr");
			var ans = [0, form.comp1.value, form.comp2.value, form.comp3.value ];
			//start couting at one to ignore table header row
			var correct = 0;
			for (var i=1; i <= ans.length ; i++){
				if ( ans[i] == 1 ) {
					$(rows[i]).find("td").each( function() {
						this.style.backgroundColor = '#4dff88';
					});
					correct++;
				} else {
					$(rows[i]).find("td").each( function() {
						this.style.backgroundColor = '#ff6666';
					});
				} 
			}

			if (correct == 3) {
				$(".fail").hide();
				$(".success").show();
			} else {
				$(".success").hide();
				$(".fail").show();
			}
			break;
		case 2:
			var ans = [ {n:form.q1_num.value,
							d:form.q1_denom.value},
						{n:form.q2_num.value,
							d:form.q2_denom.value},
						{n:form.q3_num.value,
							d:form.q3_denom.value},
						{n:form.q4_num.value,
							d:form.q3_denom.value}];

			var divs = [document.getElementById('q1'),
						document.getElementById('q2'),
						document.getElementById('q3'),
						document.getElementById('q4')];

			var passed = true;

			if (ans[0].n == 'a' && ans[0].d == 'c') {
				divs[0].style.backgroundColor= '#4dff88';
			} else {
				divs[0].style.backgroundColor = '#ff6666';
				passed = false;
			}

			if (ans[1].n == 'b' && ans[1].d == 'c') {
				divs[1].style.backgroundColor= '#4dff88';
			} else {
				divs[1].style.backgroundColor = '#ff6666';
				passed = false;
			}

			if (ans[2].n == 'b' && ans[2].d == 'c') {
				divs[2].style.backgroundColor= '#4dff88';
			} else {
				divs[2].style.backgroundColor = '#ff6666';
				passed = false;
			}

			if (ans[3].n == 'a' && ans[3].d == 'c') {
				divs[3].style.backgroundColor= '#4dff88';
			} else {
				divs[3].style.backgroundColor = '#ff6666';
				passed = false;
			}

			if (passed) {
				$(".fail").hide();
				$(".success").show();
			} else {
				$(".success").hide();
				$(".fail").show();
			}
			break;
		case 3:
			var passed = true;

			if (form.Q1.value == 90){
				document.getElementById('q1').style.backgroundColor = "#4dff88";
			} else {
				document.getElementById('q1').style.backgroundColor = "#ff6666";
				passed = false;
			}
			if (/90\s*-\s*(B|b|\u03B2)\s*/.test(form.Q2.value.toString())){
				document.getElementById('q2').style.backgroundColor = "#4dff88";
			} else {
				document.getElementById('q2').style.backgroundColor = "#ff6666";
				passed = false;
			}
			if (/90\s*-\s*(A|a|\u03B1)\s*/.test(form.Q3.value.toString())){
				document.getElementById('q3').style.backgroundColor = "#4dff88";
			} else {
				document.getElementById('q3').style.backgroundColor = "#ff6666";
				passed = false;
			}
			if (/90\s*-\s*(A|a|\u03B1)\s*/.test(form.Q4.value.toString())){
				document.getElementById('q4').style.backgroundColor = "#4dff88";
			} else {
				document.getElementById('q4').style.backgroundColor = "#ff6666";
				passed = false;
			}
			if (/sin\s?\(\s*90\s*-\s*(A|a|\u03B1)\s*\)/.test(form.Q5.value.toString())){
				document.getElementById('q5').style.backgroundColor = "#4dff88";
			} else {
				console.log(form.Q5.value.toString());
				document.getElementById('q5').style.backgroundColor = "#ff6666";
				passed = false;
			}
			if (/cos\s?\(\s*90\s*-\s*(B|b|\u03B2)\s*\)/.test(form.Q6.value.toString())){
				document.getElementById('q6').style.backgroundColor = "#4dff88";
			} else {
				document.getElementById('q6').style.backgroundColor = "#ff6666";
				passed = false;
			}
			if (/sin\s?\(\s*90\s*-\s*(B|b|\u03B2)\s*\)/.test(form.Q7.value.toString())){
				document.getElementById('q7').style.backgroundColor = "#4dff88";
			} else {
				document.getElementById('q7').style.backgroundColor = "#ff6666";
				passed = false;
			}
			if (passed) {
				$(".fail").hide();
				$(".success").show();
			} else {
				$(".success").hide();
				$(".fail").show();
			}
			break; 
		case 4:
			passed = true;
			if (form.a.value== 45){
				document.getElementById('a').style.backgroundColor = "#4dff88";
			} else {
				document.getElementById('a').style.backgroundColor = "#ff6666";
				passed = false;
			}
			if (form.b.value== 45){
				document.getElementById('b').style.backgroundColor = "#4dff88";
			} else {
				document.getElementById('b').style.backgroundColor = "#ff6666";
				passed = false;
			}
			if (form.c.value== 45){
				document.getElementById('c').style.backgroundColor = "#4dff88";
			} else {
				document.getElementById('c').style.backgroundColor = "#ff6666";
				passed = false;
			}
			if (form.d.value== 45){
				document.getElementById('d').style.backgroundColor = "#4dff88";
			} else {
				document.getElementById('d').style.backgroundColor = "#ff6666";
				passed = false;
			}
			if (form.e.value == 22.5){
				document.getElementById('e').style.backgroundColor = "#4dff88";
			} else {
				document.getElementById('e').style.backgroundColor = "#ff6666";
				passed = false;
			}
			if (form.f.value== 45){
				document.getElementById('f').style.backgroundColor = "#4dff88";
			} else {
				document.getElementById('f').style.backgroundColor = "#ff6666";
				passed = false;
			}
			if (form.g.value== 67.5){
				document.getElementById('g').style.backgroundColor = "#4dff88";
			} else {
				document.getElementById('g').style.backgroundColor = "#ff6666";
				passed = false;
			}
			if (passed) {
				$(".fail").hide();
				$(".success").show();
			} else {
				$(".success").hide();
				$(".fail").show();
			}
			break; 
	}
}

function showHint(page){
	switch (page){
		case 2: 
			document.getElementById("hint").style.display = 'block';
			break;
	}
}