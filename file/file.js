function tinhtien() {
    let amount = document.getElementById("amount").value;


    let optionfr = document.getElementById("frcurency").value;
    let optionto = document.getElementById("tocurency").value;

    if (optionfr == 'VietNam' && optionto == 'DOLA') {
        let r = amount / 22500;
        alert(r);
    }
    if (optionfr == 'VietNam' && optionto == 'USD') {
        let r = amount / 25000;
        alert(r);
    }
    if (optionfr == 'VietNam' && optionto == 'VND') {
        let r = amount;
        alert(r);
    }
    if (optionfr == 'Lao' && optionto == 'DOLA') {
        let r = amount / 35000;
        alert(r);
    }
    if (optionfr == 'Lao' && optionto == 'USD') {
        let r = amount / 40000;
        alert(r);
    }
    if (optionfr == 'Lao' && optionto == 'VND') {
        let r = amount / 3000;
        alert(r);
    }
    if (optionfr == 'CamPuChia' && optionto == 'DOLA') {
        let r = amount / 18000;
        alert(r);
    }
    if (optionfr == 'CamPuChia' && optionto == 'USD') {
        let r = amount / 22000;
        alert(r);
    }
    if (optionfr == 'CamPuChia' && optionto == 'VND') {
        let r = amount / 2500;
        alert(r);
    }
}