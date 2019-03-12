window.onscroll = function () {
    scroll_top()
};
// animation
function menuin() {
    var menu = document.getElementById('side-menu');
    menu.style.transform = "translateX(0%)";
}
function menuout() {
    var menu = document.getElementById('side-menu');
    menu.style.transform = "translateX(-100%)";
}
function length_des_from_expand() {
    var des = document.getElementById("length-from-unit-des");
    des.style.height = "150px";
    var des_min = document.getElementById("length-to-unit-des");
    des_min.style.height = "0";
}
function length_des_to_expand() {
    var des = document.getElementById("length-to-unit-des");
    des.style.height = "150px";
    var des_min = document.getElementById("length-from-unit-des");
    des_min.style.height = "0";
}
function area_des_from_expand() {
    var des = document.getElementById("area-from-unit-des");
    des.style.height = "150px";
    var des_min = document.getElementById("area-to-unit-des");
    des_min.style.height = "0";
}
function area_des_to_expand() {
    var des = document.getElementById("area-to-unit-des");
    des.style.height = "150px";
    var des_min = document.getElementById("area-from-unit-des");
    des_min.style.height = "0";
}
function weight_des_from_expand() {
    var des = document.getElementById("mass-from-unit-des");
    des.style.height = "150px";
    var des_min = document.getElementById("mass-to-unit-des");
    des_min.style.height = "0";
}
function weight_des_to_expand() {
    var des = document.getElementById("mass-to-unit-des");
    des.style.height = "150px";
    var des_min = document.getElementById("mass-from-unit-des");
    des_min.style.height = "0";
}
function tpt_des_from_expand() {
    var des = document.getElementById("tpt-from-unit-des");
    des.style.height = "150px";
    var des_min = document.getElementById("tpt-to-unit-des");
    des_min.style.height = "0";
}
function tpt_des_to_expand() {
    var des = document.getElementById("tpt-to-unit-des");
    des.style.height = "150px";
    var des_min = document.getElementById("tpt-from-unit-des");
    des_min.style.height = "0";
}
function vol_des_from_expand() {
    var des = document.getElementById("vol-from-unit-des");
    des.style.height = "150px";
    var des_min = document.getElementById("vol-to-unit-des");
    des_min.style.height = "0";
}
function vol_des_to_expand() {
    var des = document.getElementById("vol-to-unit-des");
    des.style.height = "150px";
    var des_min = document.getElementById("vol-from-unit-des");
    des_min.style.height = "0";
}
function scroll_top() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("scroll-up-btn").style.visibility = "visible";
    } else {
        document.getElementById("scroll-up-btn").style.visibility = "hidden";
    }
}
function scroll_top_active() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// convert
function converter_length() {
    var from = document.getElementById('length-from-units').value;
    var to = document.getElementById('length-to-units').value;
    var input = document.getElementById('length-input-number').value;
    var output = document.getElementById('length-result');
    var formula = document.getElementById('length-formula');
    var res_unit = document.getElementById('length-unit');
    var res;
    var x;
    if (input < 0) {
        alert('Please input vaild numbers!');
    } else
    if (from == 'inch') {
        if (to == 'meters') {
            res = input / 39.370; //inch to meters
            formula.innerText = "m = in/39.370";
            x = des.meters;
        } else if (to == 'feet') {
            res = input / 12; //inch to feet
            formula.innerText = "1 inch = 0.0833333333 feet";
            x = des.feet;
        } else if (to == 'yard') {
            res = input * 0.027778; // inch to yard
            formula.innerText = "1 inch = 0.027778 yard";
            x = des.yard;
        } else if (to == 'kilometers') {
            res = input / 39370; //inch to km
            formula.innerText = "km = in/39370";
            x = des.kilometers;
        } else if (to == 'millimeters') {
            res = input * 25.4; //inch to mm
            formula.innerText = "1 inch = 25.4 mm";
            x = des.millimeters;
        } else if (to == 'miles') {
            res = input * 0.000015783;  //inch to miles
            formula.innerText = "1 inch = 0.000015783 mile";
            x = des.miles;
        } else if (to == 'centimeters') {
            res = input / 0.39370;  //inch to cm
            formula.innerText = "1 inch = 2.54 cm";
            x = des.centimeters;
        } else if (to == 'inch') {
            res = input * 1;
            formula.innerText = "";
            x = des.inches;
        }
        output.value = res; //inch
        res_unit.innerText = to;
        document.getElementById('length-from-unit-label').innerText = from;
        document.getElementById('length-to-unit-label').innerText = to;
        document.getElementById('length-from-unit-des').innerHTML = des.inches;
        document.getElementById('length-to-unit-des').innerHTML = x;
    }
    if (from == 'meters') {
        if (to == 'inch') {
            res = input * 39.370; //m to inch
            formula.innerText = "1 m = 39.370 inch";
            x = des.inches
        } else if (to == 'feet') {
            res = input * 3.2808; //m to feet
            formula.innerText = "1 m = 3.2808 ft";
            x = des.feet;
        } else if (to == 'yard') {
            res = input * 1.0936; // m to yard
            formula.innerText = "1 m = 1.0936 yd";
            x = des.yard;
        } else if (to == 'kilometers') {
            res = input / 1000; //m to km
            formula.innerText = "1 m = 0.001km";
            x = des.kilometers;
        } else if (to == 'millimeters') {
            res = input * 1000; //m to mm
            formula.innerText = "1 m = 1000 mm";
            x = des.millimeters;
        } else if (to == 'miles') {
            res = input * 0.00062137;  //m to miles
            formula.innerText = "1 m = 0.00062137 mile";
            x = des.miles;
        } else if (to == 'centimeters') {
            res = input * 100;  //m to cm
            formula.innerText = "1 m = 100 centimeters";
            x = des.centimeters;
        } else if (to == 'meters') {
            res = input * 1;
            formula.innerText = ""; //m to m
            x = des.meters;
        }
        output.value = res;
        res_unit.innerText = to;//meters
        document.getElementById('length-from-unit-label').innerText = from;
        document.getElementById('length-to-unit-label').innerText = to;
        document.getElementById('length-from-unit-des').innerHTML = des.meters;
        document.getElementById('length-to-unit-des').innerHTML = x;
    }
    if (from == 'feet') {
        if (to == 'inch') {
            res = input * 12; //ft to inch
            formula.innerText = "1 feet = 12 inch";
            x = des.inches
        } else if (to == 'meters') {
            res = input / 3.2808; //ft to m
            formula.innerText = "1 feet = 0.3048 meters";
            x = des.meters;
        } else if (to == 'yard') {
            res = input * 0.33333333; // ft to yard
            formula.innerText = "1 feet = 0.333333333 yards";
            x = des.yard;
        } else if (to == 'kilometers') {
            res = input * 0.0003048; //ft to km
            formula.innerText = "1 feet = 0.0003048 kilometers";
            x = des.kilometers;
        } else if (to == 'millimeters') {
            res = input * 304.8; //ft to mm
            formula.innerText = "1 feet = 304.8 millimeters";
            x = des.millimeters;
        } else if (to == 'miles') {
            res = input * 0.000189393939;  //ft to miles
            formula.innerText = "1 feet = 0.000189393939 miles";
            x = des.miles;
        } else if (to == 'centimeters') {
            x = des.centimeters;
            res = input * 30.48;  //ft to cm
            formula.innerText = "1 feet = 30.48 centimeters";
        } else if (to == 'feet') {
            res = input * 1;
            formula.innerText = ""; //ft to ft
            x = des.feet;
        }
        output.value = res;
        res_unit.innerText = to;//feet
        document.getElementById('length-from-unit-label').innerText = from;
        document.getElementById('length-to-unit-label').innerText = to;
        document.getElementById('length-from-unit-des').innerHTML = des.feet;
        document.getElementById('length-to-unit-des').innerHTML = x;
    }
    if (from == "yard") {
        if (to == 'inch') {
            res = input * 36; //yd to inch
            formula.innerText = "1 yard = 36 inches";
            x = des.inches
        } else if (to == 'meters') {
            res = input * 0.9144; //yd to m
            formula.innerText = "1 yard = 0.9144 meters";
            x = des.meters;
        } else if (to == 'feet') {
            res = input * 3; // yd to ft
            formula.innerText = "1 yard = 3 feet";
            x = des.feet;
        } else if (to == 'kilometers') {
            res = input * 0.0009144; //yd to km
            formula.innerText = "1 yard = 0.0009144 kilometers";
            x = des.kilometers;
        } else if (to == 'millimeters') {
            res = input * 304.8; //yd to mm
            formula.innerText = "1 yard = 914.4 millimeters";
            x = des.millimeters;
        } else if (to == 'miles') {
            res = input * 0.000568181818;  //ft to miles
            formula.innerText = "1 yard = 0.000568181818 miles";
            x = des.miles;
        } else if (to == 'centimeters') {
            res = input * 91.44;  //ft to cm
            formula.innerText = "1 yard = 91.44 centimeters";
            x = des.centimeters;
        } else if (to == 'yard') {
            res = input * 1;
            formula.innerText = ""; //yd to yd
            x = des.yard;
        }
        output.value = res;
        res_unit.innerText = to;//yard
        document.getElementById('length-from-unit-label').innerText = from;
        document.getElementById('length-to-unit-label').innerText = to;
        document.getElementById('length-from-unit-des').innerHTML = des.yard;
        document.getElementById('length-to-unit-des').innerHTML = x;
    }
    if (from == 'kilometers') {
        if (to == 'inch') {
            res = input * 39370.0787; //km to inch
            formula.innerText = "1 km = 39 370.0787 inches";
            x = des.inches
        } else if (to == 'meters') {
            res = input * 1000; //km to m
            formula.innerText = "1 km = 1000 meters";
            x = des.meters;
        } else if (to == 'feet') {
            res = input * 3280.8399; // km to ft
            formula.innerText = "1 km = 3 280.8399 feet";
            x = des.feet;
        } else if (to == 'yard') {
            res = input * 1093.6133; //km to yd
            formula.innerText = "1 km = 1 093.6133 yards";
            x = des.yard;
        } else if (to == 'millimeters') {
            res = input * 1000000; //km to mm
            formula.innerText = "1 km = 1 000 000 millimeters";
            x = des.millimeters;
        } else if (to == 'miles') {
            res = input * 0.621371192;  //km to miles
            formula.innerText = "1 km = 0.621371192 miles";
            x = des.miles;
        } else if (to == 'centimeters') {
            res = input * 100000;  //ft to cm
            formula.innerText = "1 km = 100 000 centimeters";
            x = des.centimeters;
        } else if (to == 'kilometers') {
            res = input * 1;
            formula.innerText = ""; //km to km
            x = des.kilometers;
        }
        output.value = res;
        res_unit.innerText = to;//kilometers
        document.getElementById('length-from-unit-label').innerText = from;
        document.getElementById('length-to-unit-label').innerText = to;
        document.getElementById('length-from-unit-des').innerHTML = des.kilometers;
        document.getElementById('length-to-unit-des').innerHTML = x;
    }
    if (from == 'millimeters') {
        if (to == 'inch') {
            res = input * 0.0393700787; //mm to inch
            x = des.inches
            formula.innerText = "1 mm = 0.0393700787 inches";
        } else if (to == 'meters') {
            res = input * 0.001; //mm to m
            formula.innerText = "1 mm = 0.001 meters";
            x = des.meters;
        } else if (to == 'feet') {
            res = input * 0.0032808399; // mm to ft
            formula.innerText = "1 mm = 0.0032808399 feet ";
            x = des.feet;
        } else if (to == 'yard') {
            res = input * 0.0010936133; //mm to yd
            formula.innerText = "1 mm = 0.0010936133 yards";
            x = des.yard;
        } else if (to == 'kilometers') {
            res = input * 0.000001; //mm to km
            formula.innerText = "1 mm = 0.000001 kilometers";
            x = des.kilometers;
        } else if (to == 'miles') {
            res = input * (1 / 1609344);  //mm to miles
            formula.innerText = "1 mm = 6.213711922e-7 mile";
            x = des.miles;
        } else if (to == 'centimeters') {
            res = input * 0.1;  //mm to cm
            formula.innerText = "1 mm = 0.1 centimeters";
            x = des.centimeters;
        } else if (to == 'millimeters') {
            res = input * 1;
            formula.innerText = ""; //mm to mm
            x = des.millimeters;
        }
        output.value = res;
        res_unit.innerText = to;//millimeters
        document.getElementById('length-from-unit-label').innerText = from;
        document.getElementById('length-to-unit-label').innerText = to;
        document.getElementById('length-from-unit-des').innerHTML = des.millimeters;
        document.getElementById('length-to-unit-des').innerHTML = x;
    }
    if (from == "miles") {
        if (to == 'inch') {
            res = input * 63360; //mile to inch
            formula.innerText = "1 mile = 63 360 inches";
            x = des.inches
        } else if (to == 'meters') {
            res = input * 1609.344; //mile to m
            formula.innerText = "1 mile = 1 609.344 meters";
            x = des.meters;
        } else if (to == 'feet') {
            res = input * 5280; // mile to ft
            formula.innerText = "1 mile = 5280 feet";
            x = des.feet;
        } else if (to == 'yard') {
            res = input * 1760; //mile to yd
            formula.innerText = "1 mile = 1760 yards";
            x = des.yard;
        } else if (to == 'kilometers') {
            res = input * 1.609344; //mile to km
            formula.innerText = "1 mile = 1.609344 kilometers";
            x = des.kilometers;
        } else if (to == 'millimeters') {
            res = input * (1609344);  //miles to mm
            formula.innerText = "1 mile = 1 609 344 millimeters";
            x = des.millimeters;
        } else if (to == 'centimeters') {
            res = input * 160934.4;  //miles to cm
            formula.innerText = "1 mile = 160 934.4 centimeters";
            x = des.centimeters;
        } else if (to == 'miles') {
            res = input * 1;
            formula.innerText = ""; //mile to mile
            x = des.miles;
        }
        output.value = res;
        res_unit.innerText = to;//miles
        document.getElementById('length-from-unit-label').innerText = from;
        document.getElementById('length-to-unit-label').innerText = to;
        document.getElementById('length-from-unit-des').innerHTML = des.miles;
        document.getElementById('length-to-unit-des').innerHTML = x;
    }
    if (from == 'centimeters') {
        if (to == 'inch') {
            res = input * 0.393700787; //cm to inch
            formula.innerText = "1 cm = 0.393700787 inches";
            x = des.inches
        } else if (to == 'meters') {
            res = input * 0.01; //cm to m
            formula.innerText = "1 cm = 0.01 meters";
            x = des.meters;
        } else if (to == 'feet') {
            res = input * 0.032808399; // cm to ft
            formula.innerText = "1 cm = 0.032808399 feet";
            x = des.feet;
        } else if (to == 'yard') {
            res = input * 0.010936133; //cm to yd
            formula.innerText = "1 cm = 0.010936133 yards";
            x = des.yard;
        } else if (to == 'kilometers') {
            res = input * (1 / 100000); //cm to km
            formula.innerText = "1 cm = 0.00001 kilometer";
            x = des.kilometers;
        } else if (to == 'millimeters') {
            res = input * (10);  //cm to mm
            formula.innerText = "1 cm = 10 millimeters";
            x = des.millimeters;
        } else if (to == 'miles') {
            res = input * 10;  //cm to mile
            formula.innerText = "1 cm = 0.0000062137 mile";
            x = des.miles;
        } else if (to == 'centimeters') {
            res = input * 1;
            formula.innerText = ""; //cm to cm
            x = des.centimeters;
        }
        output.value = res;
        res_unit.innerText = to;//centimeters
        document.getElementById('length-from-unit-label').innerText = from;
        document.getElementById('length-to-unit-label').innerText = to;
        document.getElementById('length-from-unit-des').innerHTML = des.centimeters;
        document.getElementById('length-to-unit-des').innerHTML = x;
    }
}
function converter_area() {
    var from = document.getElementById('area-from-units').value;
    var to = document.getElementById('area-to-units').value;
    var input = document.getElementById('area-input-number').value;
    var output = document.getElementById('area-result');
    var formula = document.getElementById('area-formula');
    var res_unit = document.getElementById('area-unit');
    var res;
    var x;
    if (from == 'inch') {
        if (to == 'inch') {
            res = input * 1; // inch to inch
            formula.innerText = "";
            x = des.sqinch;
        } else if (to == 'mm') {
            res = input * 645.16; // inch to mm
            formula.innerText = "1 square inch = 645.16 square millimeters";
            x = des.sqmillimeters;
        } else if (to == 'cm') {
            res = input * 6.4516; // inch to cm
            formula.innerText = "1 inch = 6.4516 square cm";
            x = des.sqcentimeter;
        } else if (to == 'ft') {
            res = input * 0.00694444444; // inch to ft
            formula.innerText = "1 square inch = 0.00694444444 square ft";
            x = des.sqfeet;
        } else if (to == 'm') {
            res = input * 0.00064516; // inch to m
            formula.innerText = "1 square inch = 0.00064516 square meters";
            x = des.sqmeters;
        } else if (to == 'mile') {
            res = input * (1 / 4014489600); // inch to mile
            formula.innerText = "1 square inch = 1/4,014,489,600 square miles";
            x = des.sqmeters;
        } else if (to == 'km') {
            res = input * (16129 / 25000000000000); // inch to km
            formula.innerText = "1 square inch = 16129/25000000000000 square km";
            x = des.sqkilometer;
        } else if (to == 'yard') {
            res = input * 0.000771604938; // inch to yard
            formula.innerText = "1 square inch = 0.000771604938  square yard";
            x = des.sqyard;
        } else if (to == 'ha') {
            res = input * (1 / 115500031); // inch to ha
            formula.innerText = "1 square inch = 1/15,500,031 ha";
            x = des.hectares;
        } else if (to == 'acre') {
            res = input * 0.00000015942; // inch to acre
            formula.innerText = "1 square inch = 0.00000015942 acre";
            x = des.acres;
        }
        output.value = res; //inch
        res_unit.innerText = to;
        document.getElementById('area-from-unit-label').innerText = from;
        document.getElementById('area-to-unit-label').innerText = to;
        document.getElementById('area-from-unit-des').innerHTML = des.sqinch;
        document.getElementById('area-to-unit-des').innerHTML = x;
    }
    if (from == 'mm') {
        if (to == 'inch') {
            res = input * 0.0015500031; // mm to inch 
            formula.innerText = "1 square mm = 0.0015500031 square inch ";
            x = des.sqinch;
        } else if (to == 'mm') {
            res = input * 1; // mm to mm 
            formula.innerText = "";
            x = des.sqmillimeters;
        } else if (to == 'ft') {
            res = input * 0.000010764; // mm to ft 
            formula.innerText = "1 square mm = 0.000010764 square ft ";
            x = des.sqfeet;
        } else if (to == 'cm') {
            res = input * 0.01; // mm to cm
            formula.innerText = "1 mm = 0.01 square cm";
            x = des.sqcentimeter;
        } else if (to == 'm') {
            res = input * (1 / 1000000); // mm to m 
            formula.innerText = "1 square mm = 1/1,000,000 square m ";
            x = des.sqmeters;
        } else if (to == 'mile') {
            res = input * (1 / 2589988110000); // mm to mile 
            formula.innerText = "1 square mm = 1/2,589,988,110,000 square mile ";
            xx = des.miles;
        } else if (to == 'km') {
            res = input * (1 / 1000000000000); // mm to km 
            formula.innerText = "1 square mm = 1/1,000,000,000,000 square km ";
            x = des.sqkilometer;
        } else if (to == 'yard') {
            res = input * 0.000001196; // mm to yard 
            formula.innerText = "1 square mm = 0.000001196 square yard ";
            x = des.sqyard;
        } else if (to == 'ha') {
            res = input * (1 / 10000000000); // mm to ha 
            formula.innerText = "1 square mm = 1/10,000,000,000 ha ";
            x = des.hectares;
        } else if (to == 'acre') {
            res = input * 0.00000000024711; // mm to acre 
            formula.innerText = "1 square mm = 0.00000000024711 acre ";
            x = des.acres;
        }
        output.value = res; //inch
        res_unit.innerText = to;
        document.getElementById('area-from-unit-label').innerText = from;
        document.getElementById('area-to-unit-label').innerText = to;
        document.getElementById('area-from-unit-des').innerHTML = des.sqmillimeters;
        document.getElementById('area-to-unit-des').innerHTML = x;
    }
    if (from == 'm') {
        if (to == 'm') {
            res = input * 1; // m to m 
            formula.innerText = "";
            x = des.sqmeters;
        } else if (to == 'mm') {
            res = input * 1000000; // m to mm 
            formula.innerText = "1 square m = 1,000,000 square mm ";
            x = des.sqmillimeters;
        } else if (to == 'cm') {
            res = input * 10000; // m to cm
            formula.innerText = "1 m = 10,000 square cm";
            x = des.sqcentimeter;
        } else if (to == 'ft') {
            res = input * 10.7639104; // m to ft 
            formula.innerText = "1 square m = 10.7639104 square ft ";
            x = des.sqfeet;
        } else if (to == 'mile') {
            res = input * (1 / 0.00000038610); // m to mile 
            formula.innerText = "1 square m = 1/0.00000038610 square mile ";
            x = des.sqmiles;
        } else if (to == 'km') {
            res = input * (1 / 1000000); // m to km 
            formula.innerText = "1 square m = 1/1,000,000 square km ";
            x = des.sqkilometer;
        } else if (to == 'yard') {
            res = input * 1.19599005; // m to yard 
            formula.innerText = "1 square m = 1.19599005 square yard ";
            x = des.sqyard;
        } else if (to == 'ha') {
            res = input * 0.0001; // m to ha 
            formula.innerText = "1 square m = 0.0001 ha ";
            x = des.hectares;
        } else if (to == 'acre') {
            res = input * 0.000247105381; // m to acre 
            formula.innerText = "1 square m = 0.000247105381 acre ";
            x = des.acres;
        } else if (to == 'inch') {
            res = input * 1, 550.0031; // m to inch 
            formula.innerText = "1 square m = 1,550.0031 square inch ";
            x = des.sqinch;
        }
        output.value = res; //inch
        res_unit.innerText = to;
        document.getElementById('area-from-unit-label').innerText = from;
        document.getElementById('area-to-unit-label').innerText = to;
        document.getElementById('area-from-unit-des').innerHTML = des.sqmeters;
        document.getElementById('area-to-unit-des').innerHTML = x;
    }
    if (from == 'ft') {
        if (to == 'ft') {
            res = input * 1; // ft to ft 
            formula.innerText = "";
            x = des.sqfeet;
        } else if (to == 'mm') {
            res = input * 92903.04; // ft to mm 
            formula.innerText = "1 square ft = 92,903.04 square mm ";
            x = des.sqmillimeters;
        } else if (to == 'cm') {
            res = input * 929.0304; // ft to cm
            formula.innerText = "1 ft = 929.0304 square cm";
            x = des.sqcentimeter;
        } else if (to == 'm') {
            res = input * 0.09290304; // ft to m 
            formula.innerText = "1 square ft = 0.09290304 square m ";
            x = des.sqmeters;
        } else if (to == 'mile') {
            res = input * (1 / 27878400); // ft to mile 
            formula.innerText = "1 square ft = 1/27,878,400 square mile ";
            x = des.sqmiles;
        } else if (to == 'km') {
            res = input * 92903.04; // ft to km 
            formula.innerText = "1 square ft = 92,903.04 square km ";
            x = des.sqkilometer;
        } else if (to == 'yard') {
            res = input * (1 / 27878400); // ft to yard 
            formula.innerText = "1 square ft = 1/27,878,400 square yard ";
            x = des.sqyard;
        } else if (to == 'ha') {
            res = input * (145161 / 15625000000); // ft to ha 
            formula.innerText = "1 square ft = 145,161/15,625,000,000 ha ";
            x = des.hectares;
        } else if (to == 'acre') {
            res = input * 0.0000229568; // ft to acre 
            formula.innerText = "1 square ft = 0.0000229568 acre ";
            x = des.acres;
        } else if (to == 'inch') {
            res = input * 144; // ft to inch 
            formula.innerText = "1 square ft = 144 square inch ";
            x = des.sqinch;
        }
        output.value = res; //inch
        res_unit.innerText = to;
        document.getElementById('area-from-unit-label').innerText = from;
        document.getElementById('area-to-unit-label').innerText = to;
        document.getElementById('area-from-unit-des').innerHTML = des.sqfeet;
        document.getElementById('area-to-unit-des').innerHTML = x;
    }
    if (from == 'mile') {
        if (to == 'mile') {
            res = input * 1; // mile to mile
            formula.innerText = "";
            x = des.sqmiles
        } else if (to == 'mm') {
            res = input * 2589988110336; // mile to mm
            formula.innerText = "1 square mile = 2,589,988,110,336 square millimeters";
            x = des.sqmillimeters;
        } else if (to == 'cm') {
            res = input * 25899881103.4; // mile to cm
            formula.innerText = "1 mile = 25,899,881,103.4 square cm";
            x = des.sqcentimeter;
        } else if (to == 'ft') {
            res = input * 27878400; // mile to ft
            formula.innerText = "1 square mile = 27,878,400 square ft";
            x = des.sqfeet;
        } else if (to == 'm') {
            res = input * 2589988.11; // mile to m
            formula.innerText = "1 square mile = 2,589,988.11 square meters";
            x = des.sqmeters;
        } else if (to == 'inch') {
            res = input * 4014489600; // mile to inch
            formula.innerText = "1 square mile = 4,014,489,600 square inch";
            x = des.sqinch;
        } else if (to == 'km') {
            res = input * (2.58998811); // mile to km
            formula.innerText = "1 square mile = 2.58998811 square km";
            x = des.sqkilometer;
        } else if (to == 'yard') {
            res = input * 3097600; // mile to yard
            formula.innerText = "1 square mile = 3,097,600  square yard";
            x = des.sqyard;
        } else if (to == 'ha') {
            res = input * (258.998811); // mile to ha
            formula.innerText = "1 square mile = 258.998811 ha";
            x = des.hectares;
        } else if (to == 'acre') {
            res = input * 640; // mile to acre
            formula.innerText = "1 square mile = 640 acre";
            x = des.acres;
        }
        output.value = res; //inch
        res_unit.innerText = to;
        document.getElementById('area-from-unit-label').innerText = from;
        document.getElementById('area-to-unit-label').innerText = to;
        document.getElementById('area-from-unit-des').innerHTML = des.sqmiles;
        document.getElementById('area-to-unit-des').innerHTML = x;
    }
    if (from == 'km') {
        if (to == 'km') {
            res = input * 1; // km to km
            formula.innerText = "";
            x = des.sqkilometer;
        } else if (to == 'mm') {
            res = input * 1000000000000; // km to mm
            formula.innerText = "1 square km = 1,000,000,000,000 square millimeters";
            x = des.sqmillimeters;
        } else if (to == 'cm') {
            res = input * 10000000000; // km to cm
            formula.innerText = "1 km = 10,000,000,000 square cm";
            x = des.sqcentimeter;
        } else if (to == 'ft') {
            res = input * 10763910.4; // km to ft
            formula.innerText = "1 square km = 10,763,910.4 square ft";
            x = des.sqfeet;
        } else if (to == 'm') {
            res = input * 1000000; // km to m
            formula.innerText = "1 square km =1,000,000 square meters";
            x = des.sqmeters;
        } else if (to == 'inch') {
            res = input * (25000000000000 / 16129); // km to inch
            formula.innerText = "1 square km = 25,000,000,000,000/16,129 square inch";
            x = des.sqinch;
        } else if (to == 'mile') {
            res = input * (0.386102159); // km to mile
            formula.innerText = "1 square km = 0.386102159 square mile";
            xx = des.miles;
        } else if (to == 'yard') {
            res = input * 1, 195, 990.05; // km to yard
            formula.innerText = "1 square km = 1,195,990.05  square yard";
            x = des.sqyard;
        } else if (to == 'ha') {
            res = input * (100); // km to ha
            formula.innerText = "1 square km = 100 ha";
            x = des.hectares;
        } else if (to == 'acre') {
            res = input * 247.105381; // km to acre
            formula.innerText = "1 square km = 247.105381 acre";
            x = des.acres;
        }
        output.value = res; //inch
        res_unit.innerText = to;
        document.getElementById('area-from-unit-label').innerText = from;
        document.getElementById('area-to-unit-label').innerText = to;
        document.getElementById('area-from-unit-des').innerHTML = des.sqkilometer;
        document.getElementById('area-to-unit-des').innerHTML = x;
    }
    if (from == 'yard') {
        if (to == 'yard') {
            res = input * 1; // yard to yard
            formula.innerText = "";
            x = des.sqyard;
        } else if (to == 'mm') {
            res = input * 836127, 36; // yard to mm
            formula.innerText = "1 square yard = 83,6127,36 square millimeters";
            x = des.sqmillimeters;
        } else if (to == 'cm') {
            res = input * 100000000; // ha to cm
            formula.innerText = "1 ha = 100,000,000 square cm";
            x = des.sqcentimeter;
        } else if (to == 'ft') {
            res = input * 9; // yard to ft
            formula.innerText = "1 square yard = 9 square ft";
            x = des.sqfeet;
        } else if (to == 'm') {
            res = input * 0.83612736; // yard to m
            formula.innerText = "1 square yard = 0.83612736 square meters";
            x = des.sqmeters;
        } else if (to == 'inch') {
            res = input * 1296; // yard to inch
            formula.innerText = "1 square km = 1,296 square inch";
            x = des.sqinch;
        } else if (to == 'mile') {
            res = input * (1 / 3097600); // yard to mile
            formula.innerText = "1 square km =1/3,097,600 square mile";
            x = des.sqmiles;
        } else if (to == 'km') {
            res = input * (1306449 / 1562500000000); // yard to km
            formula.innerText = "1 square yard = 1,306,449/1,562,500,000,000  square km";
            x = des.sqkilometer;
        } else if (to == 'ha') {
            res = input * (1306449 / 15625000000); // yard to ha
            formula.innerText = "1 square yard = 1,306,449/15,625,000,000 ha";
            x = des.hectares;
        } else if (to == 'acre') {
            res = input * 0.00020661157; // yard to acre
            formula.innerText = "1 square yard = 0.00020661157  acre";
            x = des.acres;
        }
        output.value = res; //inch
        res_unit.innerText = to;
        document.getElementById('area-from-unit-label').innerText = from;
        document.getElementById('area-to-unit-label').innerText = to;
        document.getElementById('area-from-unit-des').innerHTML = des.sqyard;
        document.getElementById('area-to-unit-des').innerHTML = x;
    }
    if (from == 'ha') {
        if (to == 'ha') {
            res = input * 1; // ha to ha
            formula.innerText = "";
            x = des.hectares;
        } else if (to == 'mm') {
            res = input * 10000000000; // ha to mm
            formula.innerText = "1 ha = 10,000,000,000 square millimeters";
            x = des.sqmillimeters;
        } else if (to == 'ft') {
            res = input * 107639.104; // ha to ft
            formula.innerText = "1  ha = 107,639.104 square ft";
            x = des.sqfeet;
        } else if (to == 'cm') {
            res = input * 100000000; // ha to cm
            formula.innerText = "1 ha = 100,000,000 square cm";
            x = des.sqcentimeter;
        } else if (to == 'm') {
            res = input * 10000; // ha to m
            formula.innerText = "1 ha = 10,000 square meters";
            x = des.sqmeters
        } else if (to == 'inch') {
            res = input * 15500031; // ha to inch
            formula.innerText = "1 ha = 15,500,031 square inch";
            x = des.sqinch;
        } else if (to == 'mile') {
            res = input * 0.00386102159; // ha to mile
            formula.innerText = "1 ha =0.00386102159 square mile";
            xx = des.miles
        } else if (to == 'km') {
            res = input * (0.01); // ha to km
            formula.innerText = "1 ha = 0.01 square km";
            x = des.sqkilometer;
        } else if (to == 'yard') {
            res = input * (11, 959.9005); // ha to yard
            formula.innerText = "1 ha = 11,959.9005 square yard";
            x = des.sqyard;
        } else if (to == 'acre') {
            res = input * 2.47105381; // ha to acre
            formula.innerText = "1 ha = 2.47105381 acre";
            x = des.acres;
        }
        output.value = res; //inch
        res_unit.innerText = to;
        document.getElementById('area-from-unit-label').innerText = from;
        document.getElementById('area-to-unit-label').innerText = to;
        document.getElementById('area-from-unit-des').innerHTML = des.hectares;
        document.getElementById('area-to-unit-des').innerHTML = x;
    }
    if (from == 'acre') {
        if (to == 'acre') {
            res = input * 1; // acre to acre
            formula.innerText = "";
            x = des.acres;
        } else if (to == 'mm') {
            res = input * 100000000; // acre to mm
            formula.innerText = "1 acre = 100,000,000 square millimeters";
            x = des.sqmillimeters;
        } else if (to == 'cm') {
            res = input * 40, 468, 564.2; // acre to cm
            formula.innerText = "1 acre = 40,468,564.2 square cm";
            x = des.sqcentimeter;
        } else if (to == 'ft') {
            res = input * 1076.39104; // acre to ft
            formula.innerText = "1 acre = 1,076.39104 square ft";
            x = des.sqfeet;
        } else if (to == 'm') {
            res = input * 100; // acre to m
            formula.innerText = "1 acre = 100 square meters";
            x = des.sqmeters;
        } else if (to == 'inch') {
            res = input * 155000.31; // acre to inch
            formula.innerText = "1 acre = 155,000.31 square inch";
            x = des.sqinch;
        } else if (to == 'mile') {
            res = input * 0.0000386102; // acre to mile
            formula.innerText = "1 acre = 0.0000386102 square mile";
            xx = des.miles
        } else if (to == 'km') {
            res = input * 0.0001; // acre to km
            formula.innerText = "1 acre = 0.0001 square km";
            x = des.sqkilometer;
        } else if (to == 'yard') {
            res = input * 119.599005; // acre to yard
            formula.innerText = "1 acre = 119.599005 yard";
            x = des.sqyard;
        } else if (to == 'ha') {
            res = input * 0.404685642; // acre to ha
            formula.innerText = "1 acre = 0.404685642 ha";
            x = des.hectares;
        }
        output.value = res; //inch
        res_unit.innerText = to;
        document.getElementById('area-from-unit-label').innerText = from;
        document.getElementById('area-to-unit-label').innerText = to;
        document.getElementById('area-from-unit-des').innerHTML = des.acres;
        document.getElementById('area-to-unit-des').innerHTML = x;
    }
    if (from == 'cm') {
        if (to == 'cm') {
            res = input * 1; // cm to cm
            formula.innerText = "";
            x = des.sqcentimeter;
        } else if (to == 'mm') {
            res = input * 100; // cm to mm
            formula.innerText = "1 square cm = 100 square millimeters";
            x = des.sqmillimeters;
        } else if (to == 'ft') {
            res = input * 0.00107639104; // cm to ft
            formula.innerText = "1 square cm = 0.00107639104 square ft";
            x = des.sqfeet;
        } else if (to == 'm') {
            res = input * 0.0001; // cm to m
            formula.innerText = "1 square cm = 0.0001 square meters";
            x = des.sqmeters;
        } else if (to == 'inch') {
            res = input * 0.15500031; // cm to inch
            formula.innerText = "1 square cm = 0.15500031 square inch";
            x = des.sqinch;
        } else if (to == 'mile') {
            res = input * 0.00000000003861; // cm to mile
            formula.innerText = "1 square cm = 0.00000000003861 square mile";
            xx = des.miles;
        } else if (to == 'km') {
            res = input * (1 / 10000000000); // cm to km
            formula.innerText = "1 square cm = 1/10,000,000,000 square km";
            x = des.sqkilometer;
        } else if (to == 'yard') {
            res = input * 0.0109; // cm to yard
            formula.innerText = "1 square cm = 0.0109 yard";
            x = des.sqyard;
        } else if (to == 'ha') {
            res = input * (1 / 100000000); // cm to ha
            formula.innerText = "1 square cm = 1/100,000,000 ha";
            x = des.hectares;
        } else if (to == 'acre') {
            res = input * (125 / 5058570528); // cm to acre
            formula.innerText = "1 square cm = 125/5,058,570,528 acre";
            x = des.acres;

        }
        output.value = res; //inch
        res_unit.innerText = to;
        document.getElementById('area-from-unit-label').innerText = from;
        document.getElementById('area-to-unit-label').innerText = to;
        document.getElementById('area-from-unit-des').innerHTML = des.sqcentimeter;
        document.getElementById('area-to-unit-des').innerHTML = x;
    }
}
function converter_weight() {
    var from = document.getElementById('mass-from-units').value;
    var to = document.getElementById('mass-to-units').value;
    var input = document.getElementById('mass-input-number').value;
    var output = document.getElementById('mass-result');
    var formula = document.getElementById('mass-formula');
    var res_unit = document.getElementById('mass-unit');
    var res;
    var x;
    if (from == 'ounces') {
        if (to == 'ounces') {
            res = input * 1; //ounces to ounces
            formula.innerText = "";
            x = des.ounces;
        } else if (to == 'grams') {
            res = input * 28.3495231; // ounces to grams
            formula.innerText = "1 ounces = 28.3495231 grams";
            x = des.grams;
        } else if (to == 'pounds') {
            res = input * 0.0625; // ounces to pounds
            formula.innerText = "1 ounces = 0.0625 pounds";
            x = des.pounds;
        } else if (to == 'kilograms') {
            res = input * 0.0283495231; // ounces to kilograms
            formula.innerText = "1 ounces = 0.0283495231 kilograms";
            x = des.kilograms;
        } else if (to == 'shorttons') {
            res = input * 0.000031250; // ounces to shorttons 
            formula.innerText = "1 ounces = 0.000031250 shorttons ";
            x = des.shorttons;
        } else if (to == 'tons') {
            res = input * (1 / 35274); // ounces to tons
            formula.innerText = "1 ounces = 1/35,274 tons";
            x = des.tons;
        }
        output.value = res; //inch
        res_unit.innerText = to;
        document.getElementById('mass-from-unit-label').innerText = from;
        document.getElementById('mass-to-unit-label').innerText = to;
        document.getElementById('mass-from-unit-des').innerHTML = des.ounces;
        document.getElementById('mass-to-unit-des').innerHTML = x;
    }
    if (from == 'grams') {
        if (to == 'grams') {
            res = input * 1; //grams to grams
            formula.innerText = "";
            x = des.grams;
        } else if (to == 'ounces') {
            res = input * 0.0352739619; // grams to ounces
            formula.innerText = "1 grams = 0.0352739619 ounces";
            x = des.ounces;
        } else if (to == 'pounds') {
            res = input * 0.00220462262; // grams to pounds
            formula.innerText = "1 grams = 0.00220462262 pounds";
            x = des.pounds;
        } else if (to == 'kilograms') {
            res = input * 0.001; // grams to kilograms
            formula.innerText = "1 grams = 0.001 kilograms";
            x = des.kilograms;
        } else if (to == 'shorttons') {
            res = input * 0.0000011023; // grams to shorttons 
            formula.innerText = "1 grams = 0.0000011023 shorttons ";
            x = des.shorttons;
        } else if (to == 'tons') {
            res = input * (1 / 1000000); // ounces to tons
            formula.innerText = "1 grams = 1/1,000,000 tons";
            x = des.tons;
        }
        output.value = res; //inch
        res_unit.innerText = to;
        document.getElementById('mass-from-unit-label').innerText = from;
        document.getElementById('mass-to-unit-label').innerText = to;
        document.getElementById('mass-from-unit-des').innerHTML = des.grams;
        document.getElementById('mass-to-unit-des').innerHTML = x;
    }
    if (from == 'pounds') {
        if (to == 'pounds') {
            res = input * 1; //pounds to pounds
            formula.innerText = "";
            x = des.pounds;
        } else if (to == 'ounces') {
            res = input * 16; // pounds to ounces
            formula.innerText = "1 pound = 16 ounces";
            x = des.ounces;
        } else if (to == 'grams') {
            res = input * 453.59237; // pounds to grams
            formula.innerText = "1 pound = 453.59237 grams";
            x = des.grams;
        } else if (to == 'kilograms') {
            res = input * 0.45359237; // grams to kilograms
            formula.innerText = "1 pound = 0.45359237 kilograms";
            x = des.kilograms;
        } else if (to == 'shorttons') {
            res = input * 0.0005; // grams to shorttons 
            formula.innerText = "1 pound = 0.0005 shorttons ";
            x = des.shorttons;
        } else if (to == 'tons') {
            res = input * 0.00045359237; // ounces to tons
            formula.innerText = "1 pound = 0.00045359237 tons";
            x = des.tons;
        }
        output.value = res; //inch
        res_unit.innerText = to;
        document.getElementById('mass-from-unit-label').innerText = from;
        document.getElementById('mass-to-unit-label').innerText = to;
        document.getElementById('mass-from-unit-des').innerHTML = des.pounds;
        document.getElementById('mass-to-unit-des').innerHTML = x;
    }
    if (from == 'kilograms') {
        if (to == 'kilograms') {
            res = input * 1; //kilograms to kilograms
            formula.innerText = "";
            x = des.kilograms;
        } else if (to == 'ounces') {
            res = input * 35.2739619; // kilograms to ounces
            formula.innerText = "1 kilogram = 35.2739619 ounces";
            x = des.ounces;
        } else if (to == 'grams') {
            res = input * 1000; // kilograms to grams
            formula.innerText = "1 kilogram = 1,000 grams";
            x = des.grams;
        } else if (to == 'pounds') {
            res = input * 2.20462262; // kilograms to pounds
            formula.innerText = "1 kilogram = 2.20462262  pounds";
            x = des.pounds;
        } else if (to == 'shorttons') {
            res = input * 0.00110231131; // kilograms to shorttons 
            formula.innerText = "1 kilogram = 0.00110231131 shorttons ";
            x = des.shorttons;
        } else if (to == 'tons') {
            res = input * 0.001; // kilograms to tons
            formula.innerText = "1 kilogram = 0.001 tons";
            x = des.tons;
        }
        output.value = res; //inch
        res_unit.innerText = to;
        document.getElementById('mass-from-unit-label').innerText = from;
        document.getElementById('mass-to-unit-label').innerText = to;
        document.getElementById('mass-from-unit-des').innerHTML = des.kilograms;
        document.getElementById('mass-to-unit-des').innerHTML = x;
    }
    if (from == 'shorttons') {
        if (to == 'shorttons') {
            res = input * 1; //shorttons to shorttons
            formula.innerText = "";
            x = des.kilograms;
        } else if (to == 'ounces') {
            res = input * 32000; // shorttons to ounces
            formula.innerText = "1 shorttons = 32,000 ounces";
            x = des.ounces;
        } else if (to == 'grams') {
            res = input * 907184.74; // shorttons to grams
            formula.innerText = "1 shorttons = 907,184.74 grams";
            x = des.grams;
        } else if (to == 'pounds') {
            res = input * 2000; // shorttons to pounds
            formula.innerText = "1 shorttons = 2,000 pounds";
            x = des.pounds;
        } else if (to == 'kilograms') {
            res = input * 907.18474; // shorttons to kilograms 
            formula.innerText = "1 shorttons = 907.18474 kilograms ";
            x = des.kilograms;
        } else if (to == 'tons') {
            res = input * 0.90718474; // shorttons to tons
            formula.innerText = "1 shorttons = 0.90718474 tons";
            x = des.tons;
        }
        output.value = res; //inch
        res_unit.innerText = to;
        document.getElementById('mass-from-unit-label').innerText = from;
        document.getElementById('mass-to-unit-label').innerText = to;
        document.getElementById('mass-from-unit-des').innerHTML = des.shorttons;
        document.getElementById('mass-to-unit-des').innerHTML = x;
    }
    if (from == 'tons') {
        if (to == 'tons') {
            res = input * 1; //tons to tons
            formula.innerText = "";
            x = des.kilograms;
        } else if (to == 'ounces') {
            res = input * 35273.9619; // tons to ounces
            formula.innerText = "1 ton = 35,273.9619 ounces";
            x = des.ounces;
        } else if (to == 'grams') {
            res = input * 1000000; // tons to grams
            formula.innerText = "1 ton = 1,000,000 grams";
            x = des.grams;
        } else if (to == 'pounds') {
            res = input * 2204.62262; // tons to pounds
            formula.innerText = "1 ton = 2,204.62262 pounds";
            x = des.pounds;
        } else if (to == 'kilograms') {
            res = input * 1000; // tons to kilograms 
            formula.innerText = "1 ton = 1,000  kilograms ";
            x = des.kilograms;
        } else if (to == 'shorttons') {
            res = input * 1.10231131; // tons to shorttons
            formula.innerText = "1 ton = 1.10231131 shorttons";
            x = des.shorttons;
        }
        output.value = res; //inch
        res_unit.innerText = to;
        document.getElementById('mass-from-unit-label').innerText = from;
        document.getElementById('mass-to-unit-label').innerText = to;
        document.getElementById('mass-from-unit-des').innerHTML = des.tons;
        document.getElementById('mass-to-unit-des').innerHTML = x;
    }
}
function converter_tpt() {
    var to = document.getElementById('tpt-to-units').value;
    var from = document.getElementById('tpt-from-units').value;
    var input = document.getElementById('tpt-input-number').value;
    var output = document.getElementById('tpt-result');
    var formula = document.getElementById('tpt-formula');
    var res_unit = document.getElementById('tpt-unit');
    var res;
    var x;
    if (from == 'Degrees Celsius') {
        if (to == 'Degrees Celsius') {
            res = input * 1;
            formula.innerText = "";
            x = des.Celsius;
        } else if (to == 'Degrees Farenheit') {
            res = (input * 1.8) + 32;
            formula.innerText = "F = ( C * 1.8 )+32";
            x = des.Fahrenheit;
        } else if (to == 'Kelvin') {
            res = input + 273.15;
            formula.innerText = "K = C + 273.15";
            x = des.DegreeKelvin;
        }
        output.value = res; //inch
        res_unit.innerText = to;
        document.getElementById('tpt-from-unit-label').innerText = from;
        document.getElementById('tpt-to-unit-label').innerText = to;
        document.getElementById('tpt-from-unit-des').innerHTML = des.Celsius;
        document.getElementById('tpt-to-unit-des').innerHTML = x;
    }
    if (from == 'Degrees Farenheit') {
        if (to == 'Degrees Farenheit') {
            res = input * 1;
            formula.innerText = "";
            x = des.Fahrenheit;
        } else if (to == 'Degrees Celsius') {
            res = (input - 32) / 1.8;
            formula.innerText = "C = (F-32)/1.8";
            x = des.Celsius;
        } else if (to == 'Kelvin') {
            res = (input - 32) / 1.8 + 273.15;
            formula.innerText = "K = (F-32)/1.8)+273.15";
            x = des.DegreeKelvin;
        }
        output.value = res; //inch
        res_unit.innerText = to;
        document.getElementById('tpt-from-unit-label').innerText = from;
        document.getElementById('tpt-to-unit-label').innerText = to;
        document.getElementById('tpt-from-unit-des').innerHTML = des.Fahrenheit;
        document.getElementById('tpt-to-unit-des').innerHTML = x;
    }
    if (from == 'Kelvin') {
        if (to == 'Kelvin') {
            res = input * 1;
            formula.innerText = "";
            x = des.DegreeKelvin;
        } else if (to == 'Degrees Celsius') {
            res = input - 273.15;
            formula.innerText = "C = K-273.15";
            x = des.Celsius;
        } else if (to == 'Degrees Farenheit') {
            res = ((input - 273.15) * 1.8) + 32;
            formula.innerText = "F = ((K-273.15)*1.8)+32";
            x = des.Fahrenheit;
        }
        output.value = res; //inch
        res_unit.innerText = to;
        document.getElementById('tpt-from-unit-label').innerText = from;
        document.getElementById('tpt-to-unit-label').innerText = to;
        document.getElementById('tpt-from-unit-des').innerHTML = des.DegreeKelvin;
        document.getElementById('tpt-to-unit-des').innerHTML = x;
    }
}
function converter_volume() {
    var to = document.getElementById('vol-to-units').value;
    var from = document.getElementById('vol-from-units').value;
    var input = document.getElementById('vol-input-number').value;
    var output = document.getElementById('vol-result');
    var formula = document.getElementById('vol-formula');
    var res_unit = document.getElementById('vol-unit');
    var res;
    var x;
    if (from == 'fluid ounces') {
        if (to == 'fluid ounces') {
            res = input * 1; // fluid ounces to fluid ounces 
            formula.innerText = "";
            x = des.fluidounces;
        } else if (to == 'milliliters') {
            res = input * 29.5735296; // fluid ounces to milltliters
            formula.innerText = "1 fluid ounces = 29.5735296 milliliters";
            x = des.milliliters;
        } else if (to == 'gallons') {
            res = input * 0.0078125; // fluid ounces to gallons
            formula.innerText = "1 fluid ounces = 0.0078125 gallons";
            x = des.gallons;
        } else if (to == 'liters') {
            res = input * 0.0295735296; // fluid ounces to liters
            formula.innerText = "1 fluid ounces = 0.0295735296 liters";
            x = des.liters;
        } else if (to == 'cubic feet') {
            res = input * 0.00104437934; // fluid ounces to cubic feet 
            formula.innerText = "1 fluid ounces = 0.00104437934 cubic feet ";
            x = des.cubicfeets;
        } else if (to == 'cubic meters') {
            res = input * 0.0000295735296875; // fluid ounces to cubic meters
            formula.innerText = "1 fluid ounces = 0,0000295735296875 cubic meters";
            x = des.cubicmeters;
        } else if (to == 'cubic yard') {
            res = input * 0.000038680716306584; // fluid ounces to cubic yard
            formula.innerText = "1 fluid ounces = 0,000038680716306584 cubic yard";
            x = des.cubicyard;

        }
        output.value = res; //inch
        res_unit.innerText = to;
        document.getElementById('vol-from-unit-label').innerText = from;
        document.getElementById('vol-to-unit-label').innerText = to;
        document.getElementById('vol-from-unit-des').innerHTML = des.flounces;
        document.getElementById('vol-to-unit-des').innerHTML = x;
    }
    if (from == 'milliliters') {
        if (to == 'milliliters') {
            res = input * 1; // milliliters to milliliters 
            formula.innerText = "";
            x = des.milliliters;
        } else if (to == 'fluid ounces') {
            res = input * 0.0338140227; // milliliters  to fluid ounces
            formula.innerText = "1 milliliters = 0.0338140227 fluid ounces ";
            x = des.fluidounces;
        } else if (to == 'gallons') {
            res = input * 0.000264172052; // milliliters to gallons
            formula.innerText = "1 milliliters = 0.000264172052 gallons";
            x = des.gallons;
        } else if (to == 'liters') {
            res = input * 0.001; // milliliters to liters
            formula.innerText = "1 milliliters = 0.001 liters";
            x = des.liters;
        } else if (to == 'cubic feet') {
            res = input * 0.0000353147; // milliliters to cubic feet 
            formula.innerText = "1 milliliters = 0.0000353147 cubic feet ";
            x = des.cubicfeets;
        } else if (to == 'cubic meters') {
            res = input * 0.000001; // milliliters to cubic meters
            formula.innerText = "1 milliliters = 0.000001 cubic meters";
            x = des.cubicmeters;
        } else if (to == 'cubic yard') {
            res = input * 0.000001308; // milliliters to cubic yard
            formula.innerText = "1 milliliters = 0.000001308 cubic yard";
            x = des.cubicyard;
        }
        output.value = res; //inch
        res_unit.innerText = to;
        document.getElementById('vol-from-unit-label').innerText = from;
        document.getElementById('vol-to-unit-label').innerText = to;
        document.getElementById('vol-from-unit-des').innerHTML = des.milliliters;
        document.getElementById('vol-to-unit-des').innerHTML = x;
    }
    if (from == 'gallons') {
        if (to == 'gallons') {
            res = input * 1; // gallons to gallons 
            formula.innerText = "";
            x = des.gallons;
        } else if (to == 'fluid ounces') {
            res = input * 128; // gallons to fluid ounces
            formula.innerText = "1 gallons = 128 fluid ounces ";
            x = des.fluidounces;
        } else if (to == 'milliliters') {
            res = input * 3785.41178; // gallons to milliliters
            formula.innerText = "1 gallons = 3,785.41178 milliliters";
            x = des.milliliters;
        } else if (to == 'liters') {
            res = input * 3.78541178; // gallons to liters
            formula.innerText = "1 gallons = 3.78541178 liters";
            x = des.liters;
        } else if (to == 'cubic feet') {
            res = input * 0.133680556; // gallons to cubic feet 
            formula.innerText = "1 gallons = 0.133680556 cubic feet ";
            x = des.cubicfeets;
        } else if (to == 'cubic meters') {
            res = input * 0.00378541178; // gallons to cubic meters
            formula.innerText = "1 gallons = 0.00378541178 cubic meters";
            x = des.cubicmeters;
        } else if (to == 'cubic yard') {
            res = input * 0.00495113169; // gallons to cubic yard
            formula.innerText = "1 gallons = 0.00495113169 cubic yard";
            x = des.cubicyard;
        }
        output.value = res; //inch
        res_unit.innerText = to;
        document.getElementById('vol-from-unit-label').innerText = from;
        document.getElementById('vol-to-unit-label').innerText = to;
        document.getElementById('vol-from-unit-des').innerHTML = des.gallons;
        document.getElementById('vol-to-unit-des').innerHTML = x;
    }
    if (from == 'liters') {
        if (to == 'liters') {
            res = input * 1; // liters to liters 
            formula.innerText = "";
            x = des.liters;
        } else if (to == 'fluid ounces') {
            res = input * 33.8140227; // liters to fluid ounces
            formula.innerText = "1 liters = 33.8140227 fluid ounces ";
            x = des.fluidounces;
        } else if (to == 'milliliters') {
            res = input * 1000; // liters to milliliters
            formula.innerText = "1 liters = 1,000 milliliters";
            x = des.milliliters;
        } else if (to == 'gallons') {
            res = input * 0.264172052; // liters to gallons
            formula.innerText = "1 liters = 0.264172052 gallons";
            x = des.gallons;
        } else if (to == 'cubic feet') {
            res = input * 0.0353146667; // liters to cubic feet 
            formula.innerText = "1 liters = 0.0353146667 cubic feet ";
            x = des.cubicfeets;
        } else if (to == 'cubic meters') {
            res = input * 0.001; // liters to cubic meters
            formula.innerText = "1 liters = 0.001 cubic meters";
            x = des.cubicmeters;
        } else if (to == 'cubic yard') {
            res = input * 0.00130795062; // liters to cubic yard
            formula.innerText = "1 liters = 0.00130795062 cubic yard";
            x = des.cubicyard;
        }
        output.value = res; //inch
        res_unit.innerText = to;
        document.getElementById('vol-from-unit-label').innerText = from;
        document.getElementById('vol-to-unit-label').innerText = to;
        document.getElementById('vol-from-unit-des').innerHTML = des.liters;
        document.getElementById('vol-to-unit-des').innerHTML = x;
    }
    if (from == 'cubic feet') {
        if (to == 'cubic feet') {
            res = input * 1; // cubic feet to cubic feet 
            formula.innerText = "";
            x = des.cubicfeet;
        } else if (to == 'fluid ounces') {
            res = input * 957.506494; // cubic feet to fluid ounces
            formula.innerText = "1 cubic feet = 957.506494 fluid ounces ";
            x = des.fluidounces;
        } else if (to == 'gallons') {
            res = input * 7.48051948; // cubic feet to gallons
            formula.innerText = "1 cubic feet = 7.48051948 gallons";
            x = des.gallons;
        } else if (to == 'liters') {
            res = input * 28.3168466; // cubic feet to liters 
            formula.innerText = "1 cubic feet = 28.3168466 liters ";
            x = des.liters;
        } else if (to == 'cubic meters') {
            res = input * 0.0283168466; // cubic feet to cubic meters
            formula.innerText = "1 cubic feet = 0.0283168466 cubic meters";
            x = des.cubicmeters;
        } else if (to == 'cubic yard') {
            res = input * 0.037037037; // cubic feet to cubic yard
            formula.innerText = "1 cubic feet = 0.037037037 cubic yard";
            x = des.cubicyard;
        }
        output.value = res; //inch
        res_unit.innerText = to;
        document.getElementById('vol-from-unit-label').innerText = from;
        document.getElementById('vol-to-unit-label').innerText = to;
        document.getElementById('vol-from-unit-des').innerHTML = des.cbfeet;
        document.getElementById('vol-to-unit-des').innerHTML = x;
    }
    if (from == 'cubic meters') {
        if (to == 'cubic meters') {
            res = input * 1; // cubic meters to cubic meters
            formula.innerText = "";
            x = des.cubicmeters;
        } else if (to == 'fluid ounces') {
            res = input * 33814.0227; // cubic meters to fluid ounces
            formula.innerText = "1 cubic meters = 33,814.0227 fluid ounces ";
            x = des.fluidounces;
        } else if (to == 'milliliters') {
            res = input * 1000000; // cubic meters to milliliters
            formula.innerText = "1 cubic meters = 1,000,000 milliliters";
            x = des.milliliters;
        } else if (to == 'gallons') {
            res = input * 264.172052; // cubic meters to gallons
            formula.innerText = "1 cubic meters = 264.172052 gallons";
            x = des.gallons;
        } else if (to == 'liters') {
            res = input * 1000; // cubic meters to liters 
            formula.innerText = "1 cubic meters = 1,000 liters ";
            x = des.liters;
        } else if (to == 'cubic feet') {
            res = input * 35.3146667; // cubic meters to cubic feet
            formula.innerText = "1 cubic meters = 35.3146667 cubic feet";
            x = des.cubicfeet;
        } else if (to == 'cubic yard') {
            res = input * 1.30795062; // cubic meters to cubic yard
            formula.innerText = "1 cubic meters = 1.30795062 cubic yard";
            x = des.cubicyard;
        }
        output.value = res; //inch
        res_unit.innerText = to;
        document.getElementById('vol-from-unit-label').innerText = from;
        document.getElementById('vol-to-unit-label').innerText = to;
        document.getElementById('vol-from-unit-des').innerHTML = des.cbmeters;
        document.getElementById('vol-to-unit-des').innerHTML = x;
    }
    if (from == 'cubic yard') {
        if (to == 'cubic yard') {
            res = input * 1; // cubic yard to cubic yard
            formula.innerText = "";
            x = des.cubicyard;
        } else if (to == 'fluid ounces') {
            res = input * 25852.6753; // cubic yard to cubic yard
            formula.innerText = "1 cubic yard = 25,852.6753 fluid ounces ";
            x = des.fluidounces;
        } else if (to == 'milliliters') {
            res = input * 764, 554.858; // cubic yard to milliliters
            formula.innerText = "1 cubic yard = 764,554.858 milliliters";
            x = des.milliliters;
        } else if (to == 'gallons') {
            res = input * 201.974026; // cubic yard to gallons
            formula.innerText = "1 cubic yard = 201.974026 gallons";
            x = des.gallons;
        } else if (to == 'liters') {
            res = input * 764.554858; // cubic yard to liters 
            formula.innerText = "1 cubic yard = 764.554858 liters ";
            x = des.liters;
        } else if (to == 'cubic feet') {
            res = input * 27; // cubic yard to cubic feet
            formula.innerText = "1 cubic yard = 27 cubic feet";
            x = des.cubicfeet;
        } else if (to == 'cubic meters') {
            res = input * 0.764554858; // cubic yard to cubic meters
            formula.innerText = "1 cubic yard = 0.764554858 cubic meters";
            x = des.cubicmeters;
        }
        output.value = res; //inch
        res_unit.innerText = to;
        document.getElementById('vol-from-unit-label').innerText = from;
        document.getElementById('vol-to-unit-label').innerText = to;
        document.getElementById('vol-from-unit-des').innerHTML = des.cbyard;
        document.getElementById('vol-to-unit-des').innerHTML = x;
    }
}
// exchange
function exchange_length() {
    var tmp = '';
    tmp = document.getElementById('length-from-units').value;
    document.getElementById('length-from-units').value = document.getElementById('length-to-units').value;
    document.getElementById('length-to-units').value = tmp;
    converter_length();
}
function exchange_weight() {
    var tmp = '';
    tmp = document.getElementById('mass-from-units').value;
    document.getElementById('mass-from-units').value = document.getElementById('mass-to-units').value;
    document.getElementById('mass-to-units').value = tmp;
    converter_weight();
}
function exchange_tpt() {
    var tmp = '';
    tmp = document.getElementById('tpt-from-units').value;
    document.getElementById('tpt-from-units').value = document.getElementById('tpt-to-units').value;
    document.getElementById('tpt-to-units').value = tmp;
    converter_tpt();
}
function exchange_area() {
    var tmp = '';
    tmp = document.getElementById('area-from-units').value;
    document.getElementById('area-from-units').value = document.getElementById('area-to-units').value;
    document.getElementById('area-to-units').value = tmp;
    converter_area();
}
function exchange_volume() {
    var tmp = '';
    tmp = document.getElementById('vol-from-units').value;
    document.getElementById('vol-from-units').value = document.getElementById('vol-to-units').value;
    document.getElementById('vol-to-units').value = tmp;
    converter_volume();
}
function decimals_length() {
    var res = '';
    res = document.getElementById('length-result').value;
    var a = parseInt(res);
    var s = String(a).length;
    var x = res.length;
    var z = (x - s) - 2;
    if (res[z + s] != '.') {
        y = parseFloat(res).toFixed(z);
        document.getElementById('length-result').value = y;
    }
}

function clear_length() {
    document.getElementById("length-input-number").value = '';
    document.getElementById("length-result").value = '';
}

function copy_length() {
    var copyText = document.getElementById("length-result");
    copyText.select();
    document.execCommand("copy");
    document.getElementById('length-unit').innerText = 'Copied!';
}
function decimals_weight() {
    var res = '';
    res = document.getElementById('mass-result').value;
    var a = parseInt(res);
    var s = String(a).length;
    var x = res.length;
    var z = (x - s) - 2;
    if (res[z + s] != '.') {
        y = parseFloat(res).toFixed(z);
        document.getElementById('mass-result').value = y;
    }
}

function clear_weight() {
    document.getElementById("mass-input-number").value = '';
    document.getElementById("mass-result").value = '';
}

function copy_weight() {
    var copyText = document.getElementById("mass-result");
    copyText.select();
    document.execCommand("copy");
    document.getElementById('mass-unit').innerText = 'Copied!';
}
function decimals_tpt() {
    var res = '';
    res = document.getElementById('tpt-result').value;
    var a = parseInt(res);
    var s = String(a).length;
    var x = res.length;
    var z = (x - s) - 2;
    if (res[z + s] != '.') {
        y = parseFloat(res).toFixed(z);
        document.getElementById('tpt-result').value = y;
    }
}
function clear_tpt() {
    document.getElementById("tpt-input-number").value = '';
    document.getElementById("tpt-result").value = '';
}
function copy_tpt() {
    var copyText = document.getElementById("tpt-result");
    copyText.select();
    document.execCommand("copy");
    document.getElementById('tpt-unit').innerText = 'Copied!';
}
function decimals_area() {
    var res = '';
    res = document.getElementById('area-result').value;
    var a = parseInt(res);
    var s = String(a).length;
    var x = res.length;
    var z = (x - s) - 2;
    if (res[z + s] != '.') {
        y = parseFloat(res).toFixed(z);
        document.getElementById('area-result').value = y;
    }
}
function clear_area() {
    document.getElementById("area-input-number").value = '';
    document.getElementById("area-result").value = '';
}
function copy_area() {
    var copyText = document.getElementById("area-result");
    copyText.select();
    document.execCommand("copy");
    document.getElementById('area-unit').innerText = 'Copied!';
}
function decimals_vol() {
    var res = '';
    res = document.getElementById('vol-result').value;
    var a = parseInt(res);
    var s = String(a).length;
    var x = res.length;
    var z = (x - s) - 2;
    if (res[z + s] != '.') {
        y = parseFloat(res).toFixed(z);
        document.getElementById('vol-result').value = y;
    }
}
function clear_vol() {
    document.getElementById("vol-input-number").value = '';
    document.getElementById("vol-result").value = '';
}
function copy_vol() {
    var copyText = document.getElementById("vol-result");
    copyText.select();
    document.execCommand("copy");
    document.getElementById('vol-unit').innerText = 'Copied!';
}
//abcxyz





































