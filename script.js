
// Insert angka
function insert(num){
	document.form.textarea.value = document.form.textarea.value + num;
}

// Perhitungan
function equal(){
	var hasil = document.form.textarea.value;
	document.form.textarea.value = eval(hasil);
}

// Fungsi Clean
function clean(){
	document.form.textarea.value = " ";
}

// Fungsi Delete
function back(){
	var hasil = document.form.textarea.value;
	document.form.textarea.value = hasil.substring(0,hasil.length-1);
}