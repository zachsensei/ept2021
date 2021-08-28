function check(){
	var c=0;
	var q1=document.quiz.question1.value;
	var q2=document.quiz.question2.value;
	var q3=document.quiz.question3.value;
	var q4=document.quiz.question4.value;
	var q5=document.quiz.question5.value;
	var q6=document.quiz.question6.value;
	var q7=document.quiz.question7.value;
	var q8=document.quiz.question8.value;
	var q9=document.quiz.question9.value;
	var q10=document.quiz.question10.value;
	var q11=document.quiz.question11.value;
	var q12=document.quiz.question12.value;
	var q13=document.quiz.question13.value;
	var q14=document.quiz.question14.value;
	var q15=document.quiz.question15.value;
	var q16=document.quiz.question16.value;
	var q17=document.quiz.question17.value;
	var q18=document.quiz.question18.value;
	var q19=document.quiz.question19.value;
	var q20=document.quiz.question20.value;
	var q21=document.quiz.question21.value;
	var q22=document.quiz.question22.value;
	var q23=document.quiz.question23.value;
	var q24=document.quiz.question24.value;
	var q25=document.quiz.question25.value;
	var q26=document.quiz.question26.value;
	var q27=document.quiz.question27.value;
	var q28=document.quiz.question28.value;
	var q29=document.quiz.question29.value;
	var q30=document.quiz.question30.value;
	var q31=document.quiz.question31.value;
	var q32=document.quiz.question32.value;
	var q33=document.quiz.question33.value;
	var q34=document.quiz.question34.value;
	var q35=document.quiz.question35.value;
	var q36=document.quiz.question36.value;
	var q37=document.quiz.question37.value;
	var q38=document.quiz.question38.value;
	var q39=document.quiz.question39.value;
	var q40=document.quiz.question40.value;
	var q41=document.quiz.question41.value;
	var q42=document.quiz.question42.value;
	var q43=document.quiz.question43.value;
	var q44=document.quiz.question44.value;
	var q45=document.quiz.question45.value;
	var q46=document.quiz.question46.value;
	var q47=document.quiz.question47.value;
	var q48=document.quiz.question48.value;
	var q49=document.quiz.question49.value;
	var q50=document.quiz.question50.value;
	var result=document.getElementById('result');
	var quiz=document.getElementById("quiz");
		if (q1=="d1") {c++}
		if (q2=="c2") {c++}
		if (q3=="a3") {c++}
		if (q4=="d4") {c++}
		if (q5=="c5") {c++}
		if (q6=="c6") {c++}
		if (q7=="d7") {c++}
		if (q8=="d8") {c++}
		if (q9=="d9") {c++}
		if (q10=="a10") {c++}
		if (q11=="d11") {c++}
		if (q12=="a12") {c++}
		if (q13=="a13") {c++}
		if (q14=="c14") {c++}
		if (q15=="c15") {c++}
		if (q16=="b16") {c++}
		if (q17=="d17") {c++}
		if (q18=="a18") {c++}
		if (q19=="c19") {c++}
		if (q20=="a20") {c++}
		if (q21=="d21") {c++}
		if (q22=="b22") {c++}
		if (q23=="c23") {c++}
		if (q24=="a24") {c++}
		if (q25=="d25") {c++}
		if (q26=="c26") {c++}
		if (q27=="a27") {c++}
		if (q28=="b28") {c++}
		if (q29=="c29") {c++}
		if (q30=="b30") {c++}
		if (q31=="d31") {c++}
		if (q32=="a32") {c++}
		if (q33=="d33") {c++}
		if (q34=="a34") {c++}
		if (q35=="c35") {c++}
		if (q36=="d36") {c++}
		if (q37=="d37") {c++}
		if (q38=="d38") {c++}
		if (q39=="c39") {c++}
		if (q40=="c40") {c++}
		if (q41=="d41") {c++}
		if (q42=="a42") {c++}
		if (q43=="c43") {c++}
		if (q44=="a44") {c++}
		if (q45=="d45") {c++}
		if (q46=="b46") {c++}
		if (q47=="c47") {c++}
		if (q48=="d48") {c++}
		if (q49=="c49") {c++}
		if (q50=="d50") {c++}
		quiz.style.display="none";
		
	
	if(c<=40){
		result.textContent=`Your result is ${c}. It is not so good.`
	} else{
		result.textContent=`Your result is ${c}. You did a great job.`
	}
}

