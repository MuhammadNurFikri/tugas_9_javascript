function barangElektronik(){
    var gadget = {
        nama : "laptop",
        spek : "gaming",
        harga : 12000000,
        warna : "putih"
    }
    for(var x in gadget){
        console.log(gadget[x])
    }
}

barangElektronik()