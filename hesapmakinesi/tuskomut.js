let sum = 0; //sonuç sadece C'ye basınca sıfırlanacak
let number1 = 0;
let boxvalue =''; //container.value içindekileri string olarak almak istiyorum, onun için bu veriyi koyacağımız değişken string olmalı
const container = document.getElementById('display-screen'); // textbox'a erişim 
const equation = document.getElementById("equation"); // sonuca erişim
let rememberOpeator = ''; // son kullanılan işlem operatörü, üst üste toplama çıkarma vb işlemler yapılırken kullanılacak
let currentOperator = ''; // eşittire basınca kullanılacak olan işlem operatörü 


function removeText()  //silme tuşu
{
    boxvalue = container.value;

    if (boxvalue=='') 
    {
        container.value=boxvalue;
    } 
    else{
    let boxArray = boxvalue.split("");
    let boxArray2 = boxArray.pop();
    boxArray = boxArray.join("");
    
    container.value = boxArray; }
};

function add() //toplama işlemi
{
    currentOperator='+';
    boxvalue = container.value;

    if(!(boxvalue==''))   // kutunun içi boş değilse number1'a kutunun içini atıyoruz
    {
        number1 = parseFloat(boxvalue); 

        if((rememberOpeator=='+'))    // kutunun içi boş değil ve son kullanılan operatör + ise sonuca numarayı ekliyoruz
        {   
            sum+= number1;
            /*
            boxvalue = sum.toString();
            container.value = "";
            equation.innerHTML = boxvalue;*/ 
            sonIslem();
        }

        if ( !(rememberOpeator=='+')) { 
            //kutunun içi boş değil ve son kullanılan işlem + değilse
        /* if (!(rememberOpeator=='')) sum = equate(sum,rememberOpeator,number1); // son kullanılan işlem varsa önce o işlem yapılıyor, 
            if (sum==0 && (rememberOpeator=='')) sum+=number1;  // sum, sıfırsa ve son kullanılan işlem boşsa sonuca bu numara ekleniyor */
        onIslem();

        rememberOpeator='+';
        sonIslem();
        /*
        boxvalue = sum.toString();
        equation.innerHTML = boxvalue;
        container.value = ""; */   }
    } else alert("Lütfen Önce Rakam Seçin") //eğer kutu boşsa ve toplama tuşuna basılıyorsa uyarı veriliyor
};

function substract() // çıkarma işlemi
{   
    currentOperator = '-';
    boxvalue = container.value;

    if(!(boxvalue==''))
    {
        number1 = parseFloat(boxvalue); 

        if((rememberOpeator=='-')) 
        {   
            sum-= number1;
            /*
            boxvalue = sum.toString();
            container.value = "";
            equation.innerHTML = boxvalue;*/
            sonIslem();
        }else{          
            /*
            if (!(rememberOpeator==''))sum = equate(sum,rememberOpeator,number1); 
            if (sum==0 && (rememberOpeator=='')) sum+=number1;*/
            onIslem();
            rememberOpeator='-';
            sonIslem();
            /*
            boxvalue = sum.toString();
            equation.innerHTML = boxvalue;
            container.value = ""; */ }

    } else { document.getElementById('display-screen').value+='-'; } 
        // kutunun içi boşsa '-' yazılıyor, negatif sayıların kullanılabilmesi için  lazım
        
     
};
function multiply() //çarpma işlemi
{
    currentOperator='*';
    boxvalue = container.value;

    if(!(boxvalue==''))
    {
        number1 = parseFloat(boxvalue); 
        if((rememberOpeator=='*'))
        {   
            sum*= number1;
            /*
            boxvalue = sum.toString();
            container.value = "";
            equation.innerHTML = boxvalue;*/
            sonIslem();
        }else {
            
            onIslem();
            /*
            if (!(rememberOpeator==''))sum = equate(sum,rememberOpeator,number1); 
            if (sum==0 && (rememberOpeator=='')) sum+=number1;*/

            rememberOpeator='*';
            sonIslem();
            /* boxvalue = sum.toString();
            equation.innerHTML = boxvalue;
            container.value = ""; */ }
    }else {equation.innerHTML = "Lütfen Önce Rakam Seçin";}
        
};

function divide() //bölme işlemi
{   
    currentOperator='/';
    boxvalue = container.value;

    if(!(boxvalue=='') && !(boxvalue=='0'))
    {
        number1 = parseFloat(boxvalue); 

        if( (rememberOpeator=='/') )
        {   
            sum/= number1;
            /*
            boxvalue = sum.toString();
            container.value = "";
            equation.innerHTML = boxvalue; */
            sonIslem();
        } else{
            /*if (!(rememberOpeator==''))sum = equate(sum,rememberOpeator,number1); 
            if (sum==0 && (rememberOpeator=='')) sum+=number1;*/
            onIslem();
            rememberOpeator='/';

            /* boxvalue = sum.toString();
            equation.innerHTML = boxvalue;
            container.value = ""; */ 
            sonIslem();
        }
    }
        if (boxvalue=='') equation.innerHTML = "Lütfen Önce Rakam Seçin";
        if (boxvalue=='0') alert("Sayılar Sıfıra Bölünemez!");
};


function squareRoot() // karekök fonksiyonu
{
    boxvalue = container.value;
    if(!(boxvalue==''))
    {
        let sqrt = parseFloat(boxvalue);
        sqrt = Math.sqrt(sqrt);
        if(!(rememberOpeator==''))
        {
            sum = equate(sum,rememberOpeator,sqrt);
            sonIslem();
            /* boxvalue = sum.toString();
            container.value = '';
            equation.innerHTML = boxvalue; */
        } else
        {
            /*
            boxvalue = sqrt.toString();
            sum = sqrt;
            container.value = '';
            equation.innerHTML = boxvalue;*/
            ozelTusIslem(sqrt);
        }
    }

    if(boxvalue=='') 
    {
        equation.innerHTML = "Lütfen Önce Rakam Seçiniz";
    }
};


function xSquare() // x² fonksiyonu 
{
    boxvalue = container.value;

    if(!(boxvalue==''))
    {
        let sqrt = parseFloat(boxvalue)* parseFloat(boxvalue);
        if(!(rememberOpeator==''))
        {
            sum = equate(sum,rememberOpeator,sqrt);
            sonIslem();
            /*
            boxvalue = sum.toString();
            container.value = '';
            equation.innerHTML = boxvalue;*/
        } else
        {
            /*
            boxvalue = sqrt.toString();
            sum = sqrt;
            container.value = '';
            equation.innerHTML = boxvalue;*/
            ozelTusIslem(sqrt);
        }
    }
    if(boxvalue=='') 
    {
        equation.innerHTML = "Lütfen Önce Rakam Seçiniz";
    }

};

function xCube() // x³ fonksiyonu
{
    boxvalue = container.value;
    if(!(boxvalue==''))
    {
        let sqrt = parseFloat(boxvalue) * parseFloat(boxvalue) * parseFloat(boxvalue);
        if(!(rememberOpeator==''))
        {
            sum = equate(sum,rememberOpeator,sqrt);
            sonIslem();
            /*
            boxvalue = sum.toString();
            container.value = '';
            equation.innerHTML = boxvalue;*/
        } else
        {
            /*
            boxvalue = sqrt.toString();
            sum = sqrt;
            container.value = '';
            equation.innerHTML = boxvalue;*/
            ozelTusIslem(sqrt);
        }
    }

    if(boxvalue=='') 
    {
        equation.innerHTML = "Lütfen Önce Rakam Seçiniz";
    }

};



function clearAll() // bütün değerleri sıfırlama fonksiyonu
{
    container.value = '';
    equation.innerHTML = "0";
    sum = 0;
    number1=0;
    currentOperator='';
    rememberOpeator='';
};

function divideByTwo() // verilen sayıyı 2ye bölme fonksiyonu
{
    boxvalue = container.value;
    if(!(boxvalue==''))
    {
        let sqrt = parseFloat(boxvalue)/2;

        if(!(rememberOpeator==''))
        {
            sum = equate(sum,rememberOpeator,sqrt);
            sonIslem();
            /*
            boxvalue = sum.toString();
            container.value = '';
            equation.innerHTML = boxvalue;*/
        } else
        {
            /*
            boxvalue = sqrt.toString();
            sum = sqrt;
            container.value = '';
            equation.innerHTML = boxvalue;*/
            ozelTusIslem(sqrt);
        }

        
    }

    if(boxvalue=='') 
    {
        equation.innerHTML = "Lütfen Önce Rakam Seçiniz";
    }
};

function getEqual() // sonuç alma fonksiyonu
{
    boxvalue = container.value;

   if ((boxvalue=='0') &&  (currentOperator =='/')  ) 
    {
        alert("Sayılar Sıfıra Bölünemez!")
        clearAll();
        boxvalue = '';
    }

    if(!(boxvalue=='')) 
    {
        number1 = parseFloat(boxvalue);
        sum = equate(sum,currentOperator,number1);
        /*
        container.value = '';
        equation.innerHTML = newsum;*/
        sonIslem();

    }

    if(boxvalue=='' && !(equation.innerHTML=='0') )
    {
        sum = equate(sum,currentOperator,number1);
        equation.innerHTML = sum;
    }
    
};

function addPeriod() // nokta koyma fonksiyonu 0.5 vs
{
    boxvalue = container.value;
    let dotCount = 0;
    let boxArray = boxvalue.split("");
    
    for (let i=0; i<boxArray.length; i++)
    {
        if(boxArray[i]=='.') 
        {
            container.value='';
            alert("Lütfen Birden Fazla Nokta Kullanmayın");
            dotCount++;
        }
    }

    if (boxvalue=='')
    {
        container.value='0.';
    } 

    if(!(boxvalue == '') && dotCount == 0)
    {
        let boxArray2 = boxArray.push('.');
        boxArray = boxArray.join("");
        container.value = boxArray;
    }
};





function equate(value1, operator, value2)
{
    switch (operator) {
        case '+': return value1 + value2;
        case '-': return value1 - value2;
        case '*': return value1 * value2;
        case '/': return value1 / value2;
    }

};

function onIslem()
{
	if (!(rememberOpeator==''))sum = equate(sum,rememberOpeator,number1); 
    if (sum==0 && (rememberOpeator=='')) sum+=number1;
};

function sonIslem()
{
    boxvalue = sum.toString();
    equation.innerHTML = boxvalue;
    container.value = "";
};

function ozelTusIslem(sqrt)
{
    boxvalue = sqrt.toString();
    sum = sqrt;
    container.value = '';
    equation.innerHTML = boxvalue;
};
