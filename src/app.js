// SLICK CAROUSEL

let arrayMeals = ["Fruits et légumes", "Viande rouge", "Charcuterie", "Viande blanche", "Féculents et produits céréaliers", "Poisson gras", "Poisson maigre", "œuf", "Produits laitiers", "Légumineuses"];
let arrayDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
let meals = ["Petit déjeuner", "Déjeuner", "Goûter", "Dinner"];

$(document).ready(function () {
    $('.carousel').slick({
        infinite: false,
        slidesToShow: 3.2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2.2
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1.1,
                    arrows: false
                }
            }
        ]
    });


    $(".slick-prev").prependTo(".prev");
    $(".slick-prev").text("précédent");
    $(".slick-next").appendTo(".next");
    $(".slick-next").text("suivant");


    // FORM

    // get form container
    let formContainer = document.getElementById('container-form');

    let cantineForm = document.createElement('form');
    cantineForm.id = "cantineForm";
    cantineForm.setAttribute("name", "uptake");
    formContainer.append(cantineForm);

    let formTitle = document.createElement('h3');
    formTitle.innerText = "Ajouter les menu du jour";
    cantineForm.append(formTitle);

    // select day
    let selectDay = document.createElement('select');
    selectDay.classList.add("select-css");
    selectDay.setAttribute("name", "day");
    let defaultOption = document.createElement('option');
    defaultOption.text = 'Choisir un jour';
    defaultOption.setAttribute("disabled", "disabled");
    defaultOption.setAttribute("selected", "selected");
    selectDay.add(defaultOption);

    for (j = 0; j < arrayDays.length; j++) {
        option = document.createElement('option');
        option.text = arrayDays[j];
        option.value = arrayDays[j];
        selectDay.add(option);
    }

    cantineForm.append(selectDay);


    for (i = 0; i < meals.length; i++) {

        // meal container
        let mealContainer = document.createElement('div');
        mealContainer.classList.add("meal-container");
        mealContainer.id = "meal" + i;

        // meal title
        let mealTitle = document.createElement('h4');
        mealTitle.innerText = meals[i];
        mealContainer.append(mealTitle);

        // input section
        let inputSection = document.createElement('div');
        inputSection.classList.add("grid", "spanx-row", "columns-12", "meal-row");
        mealContainer.append(inputSection);

        // add button
        let addBtn = document.createElement('button');
        addBtn.innerText = "Ajouter";
        addBtn.classList.add("add-btn");
        addBtn.setAttribute("type", "button");
        addBtn.setAttribute("onclick", "addElement(this);");
        mealContainer.append(addBtn);

        // select
        let selectMeal = document.createElement('select');
        selectMeal.classList.add("spanx-8", "select-css");
        selectMeal.setAttribute("name", "meal");
        let defaultOption = document.createElement('option');
        defaultOption.text = 'Choisir un type d\'aliment';
        defaultOption.setAttribute("disabled", "disabled");
        defaultOption.setAttribute("selected", "selected");
        selectMeal.add(defaultOption);

        for (j = 0; j < arrayMeals.length; j++) {
            option = document.createElement('option');
            option.text = arrayMeals[j];
            option.value = arrayMeals[j];
            selectMeal.add(option);
        }

        inputSection.append(selectMeal);

        // x
        let portionSpan = document.createElement('div');
        portionSpan.classList.add("spanx-1", "x", "d-flex", "align-items-center", "justify-content-center");
        portionSpan.innerText = "x";
        inputSection.append(portionSpan);

        // portion input
        let inputPortion = document.createElement('input');
        inputPortion.setAttribute("type", "number");
        inputPortion.setAttribute("name", "portion");
        inputPortion.setAttribute("min", "1");
        inputPortion.setAttribute("max", "99");
        inputPortion.setAttribute("placeholder", "1");
        inputPortion.classList.add("spanx-2", "form-control");
        inputSection.append(inputPortion);
        cantineForm.append(mealContainer);

        // delete row
        let deleteRow = document.createElement('button');
        deleteRow.classList.add("spanx-1", "delete-row");
        deleteRow.setAttribute("onclick", "deleteRow(this); return false");
        inputSection.append(deleteRow);
        let deleteIcon = document.createElement('i');
        deleteIcon.classList.add("fa", "fa-trash");
        deleteRow.append(deleteIcon);
    }

    // submit btn
    let submitBtn = document.createElement('button');
    submitBtn.innerText = "Valider";
    submitBtn.classList.add("submit-button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("onclick", "showValues(); newUptake(); return false");
    cantineForm.append(submitBtn);

});


function addElement(e) {

    //console.log(e);

    // input section
    let inputSection = document.createElement('div');
    inputSection.classList.add("grid", "spanx-row", "columns-12", "meal-row");

    // select
    let selectMeal = document.createElement('select');
    selectMeal.classList.add("spanx-8", "select-css");
    selectMeal.setAttribute("name", "meal");
    let defaultOption = document.createElement('option');
    defaultOption.text = 'Choisir un type d\'aliment';
    defaultOption.setAttribute("disabled", "disabled");
    defaultOption.setAttribute("selected", "selected");
    selectMeal.add(defaultOption);

    for (j = 0; j < arrayMeals.length; j++) {
        option = document.createElement('option');
        option.text = arrayMeals[j];
        option.value = arrayMeals[j];
        selectMeal.add(option);
    }

    inputSection.append(selectMeal);

    // x
    let portionSpan = document.createElement('div');
    portionSpan.classList.add("spanx-1", "x", "d-flex", "align-items-center", "justify-content-center");
    portionSpan.innerText = "x";
    inputSection.append(portionSpan);

    // portion input
    let inputPortion = document.createElement('input');
    inputPortion.setAttribute("type", "number");
    inputPortion.setAttribute("name", "portion");
    inputPortion.setAttribute("min", "1");
    inputPortion.setAttribute("max", "99");
    inputPortion.setAttribute("placeholder", "1");
    inputPortion.classList.add("spanx-2", "form-control");
    inputSection.append(inputPortion);

    // delete row
    let deleteRow = document.createElement('button');
    deleteRow.classList.add("spanx-1", "delete-row");
    deleteRow.setAttribute("onclick", "deleteRow(this); return false");
    inputSection.append(deleteRow);
    let deleteIcon = document.createElement('i');
    deleteIcon.classList.add("fa", "fa-trash");
    deleteRow.append(deleteIcon);

    e.before(inputSection);

}

function deleteRow(e) {
    e.closest('.meal-row').remove();
}



function showValues() {

    let getDay = $("select[name='day']").val();

    //console.log($("select[name='meal']").val());

    uptakeExist = document.getElementById(getDay);

    if (getDay && !uptakeExist) {

        // create a uptake day element
        let uptakeWeek = document.getElementById('uptakeWeek');
        let uptakedayContainer = document.createElement('div');
        uptakedayContainer.classList.add("spanx-3", "fit-content", "row", "uptake-container");
        //uptakedayContainer.id = getDay;
        uptakeWeek.append(uptakedayContainer);

        let uptakeday = document.createElement('div');
        uptakeday.classList.add("uptake-day");
        uptakedayContainer.append(uptakeday);

        // dropdown btn
        let dropdownBtn = document.createElement('button');
        dropdownBtn.classList.add("drop-menu");
        dropdownBtn.setAttribute("type", "button");
        dropdownBtn.setAttribute("data-toggle", "collapse");
        dropdownBtn.setAttribute("aria-expanded", "false");
        dropdownBtn.setAttribute("data-target", "#" + getDay);
        dropdownBtn.setAttribute("aria-controls", getDay);
        dropdownBtn.innerText = getDay;
        uptakeday.append(dropdownBtn);

        // uptake content

        let collapse = document.createElement('div');
        collapse.classList.add("collapse");
        collapse.id = getDay;
        uptakeday.append(collapse);

        let card = document.createElement('div');
        card.classList.add("card", "card-body");
        card.id = getDay;
        collapse.append(card);

        $(".meal-container").each(function () {

            let mealName = document.createElement('h4');
            mealName.innerText = $(this).find("h4").text();
            card.append(mealName);

            $(this).find(".meal-row").each(function () {

                let el = document.createElement('p');
                let meal = $(this).find("select[name='meal']").val();
                let portion = $(this).find("input[name='portion']").val();
                if (meal && portion) {
                    el.innerText = meal + " x " + portion;
                    card.append(el);
                }
                if (meal && !portion) {
                    el.innerText = meal + " x " + 1;
                    card.append(el);
                }
            });
        });

        // Btn delete

        let deleteBtn = document.createElement('button');
        deleteBtn.innerText = "Supprimer";
        deleteBtn.classList.add("delete-button");
        deleteBtn.setAttribute("onclick", "deleteDay(this); return false");
        collapse.append(deleteBtn);

    }
    if (!getDay) {
        alert("choisissez un jour");
    }
    if (uptakeExist) {
        alert(getDay + "'s menu already exists");
    }
}

function deleteDay(e) {
    e.closest('.uptake-container').remove();
}


function newUptake() {
    let upcake = new HappyMeals;

    console.log(upcake);
}