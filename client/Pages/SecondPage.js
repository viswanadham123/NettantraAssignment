const form = document.getElementById('formValidation');

const validation=(event)=> {
    event.preventDefault();
    const hscInstituteName = document.getElementById('hscInstituteName').value.trim();
    const hscBoard = document.getElementById('hscBoard').value;
    const hscScore = document.getElementById('hscScore').value.trim();
    const sscInst = document.getElementById('sscInst').value.trim();
    const sscBoard = document.getElementById('sscBoard').value;
    const sscScore = document.getElementById('sscScore').value.trim();
    const currentPursuit = document.getElementById('currentPursuit').value.trim();
    const currentInst = document.getElementById('currentInst').value.trim();
    const overallScore = document.getElementById('overallScore').value.trim();
    const backlogs = document.getElementById('backlogs').value.trim();


    if (hscInstituteName === "") {
        alert("please fill the HSC Institution Name");
        return false;
    }

    if (hscBoard === "") {
        alert("please fill the HSC Board");
        return false;
    }

    if (hscScore === "" || hscScore > 100 || isNaN(parseInt(hscScore))) {
        alert("please fill the HSC SCore in percentage");
        return false;
    }


    if (sscInst === "") {
        alert("please fill the SSC Institution Name");
        return false;
    }

    if (sscBoard === "") {
        alert("please fill the SSC Board");
        return false;
    }
    if (sscScore === "" || sscScore > 100 || isNaN(parseInt(sscScore))) {
        alert("please fill the SSC Score in percentage");
        return false;
    }

    if (currentPursuit === "") {
        alert("please fill the Currently pursuing ");
        return false;
    }
    if (currentInst === "") {
        alert("please fill the Current Institution Name");
        return false;
    }
    if (overallScore === "" || isNaN(parseInt(overallScore)) || overallScore>100) {
        alert("please fill the overall Percentage");
        return false;
    }


    const formData = {
        hscInstituteName:hscInstituteName,
        hscBoard:hscBoard,
        hscScore:hscScore,
        sscInst:sscInst,
        sscBoard:sscBoard,
        sscScore:sscScore,
        currentPursuit:currentPursuit,
        currentInst:currentInst,
        overallScore:overallScore,
        backlogs:backlogs
    };
    localStorage.setItem('formData', JSON.stringify(formData));
    window.location.href = './ThirdPage.html';
};


form.addEventListener("submit",validation)