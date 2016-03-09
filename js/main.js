$(document).ready(function() {
    var defaultdob = moment().subtract(18, 'years').startOf('year').format('DD/MM/YYYY');
    var flagalltabs = [];
    var flagvalidtabs = [];
    var flaginvalidtabs = [];
    var date18years = moment().subtract(18, 'years').format('DD/MM/YYYY');
    var dateAfter = moment().format('DD/MM/YYYY');
    var dateBefore = moment().format('DD/MM/YYYY');
    //Set restrictions for prev employee date
    $('#fEmplSince').on('dp.change', function(e) {
        $('#fPrEmplEnd').data("DateTimePicker").maxDate(e.date);
    });
    $('#fPrEmplEnd').on('dp.change', function(e) {
        $('#fPrEmplStart').data("DateTimePicker").maxDate(e.date);
    });
    var livedyears = 0;
    //Sticky top bar
    function headRoom() {
        var header = new Headroom(document.querySelector("#header"), {
            tolerance: {
                up: 8,
                down: 5
            },
            offset: 120,
        });
        header.init();
    }
    // headRoom();

    //Match height of two sidebars
    function matchHeight() {
        $('.parent').each(function() {
            $(this).find('.child').matchHeight({});
        });
    }
    matchHeight();

    //Popover init
    function customPopover() {
        if (Modernizr.mq('(min-width: 767px)')) {
            $('.show-pop').popover({
                trigger: 'focus',
                placement: 'auto right',
                animation: true,
            });
            $('.yesNoPopOver').popover({
                trigger: 'hover',
                placement: 'auto left',
                animation: true,
            });
        } else {
            $('.show-pop').popover({
                trigger: 'manual',
                placement: 'auto bottom',
            })
            $(".help-icon").click(function() {
                $(".popover").remove();
                $(this).nextAll('.show-pop').popover('toggle');
            });
            $('.yesNoPopOver').popover({
                trigger: 'manual',
                placement: 'auto bottom',
            })
            $(".help-icon").click(function() {
                $(this).next('.yesNoPopOver').popover('toggle');
            });
        }
    }
    customPopover();

    // datetimepicker disable time
    function datePickerControl() {
        $('.date-of-birth').datetimepicker({
            viewMode: 'years',
            format: 'DD/MM/YYYY',
            defaultDate: defaultdob,
        });
        $('.date-picker-icon').datetimepicker({
            viewMode: 'years',
            format: 'DD/MM/YYYY'
        });
    }
    datePickerControl();

    // Input File
    function clearInputFile() {
        $('.btn-destroy').click(function() {
            var getDataAttr = $(this).attr("data-target");
            if ($('.filestyle').data('filestyle')) {
                $("#" + getDataAttr).filestyle('clear');
            } else {
                $('.filestyle').filestyle();
                $("#" + getDataAttr).html('clear');
            }
        });
    }
    clearInputFile();

    // Stuff to do on resize
    $(window).resize(function() {

    });

    //Darkens label on form focus
    function darkenOnFocus() {
        $("form :input").focus(function() {
            $("label[for='" + this.id + "']").addClass("label-focus");
        }).blur(function() {
            $("label").removeClass("label-focus");
        });
    }
    darkenOnFocus();


    //Function to set the greeting name
    $("#fFname, #fCommonName, #f1Fname").on('change', function(e) {
        var greetname;
        $("#fFname, #fCommonName").blur(function() {
            greetname = $('#fFname').val();
            if (!$('#fCommonName').val()) {
                greetname = $('#fFname').val();
            } else {
                greetname = $('#fCommonName').val();
            }
            $('.left-sidebar h3').text("Hello " + greetname + "!");
        });

        $("#f1Fname").blur(function() {
            greetname = $('#f1Fname').val();
            $('.left-sidebar h3').text("Hello " + greetname + "!");
        });
    });



    //custom-validation.js
    //Validation Starts for non-repeating fields
    $('.rootwizard')

    // String Validation
    .formValidation({
            framework: 'bootstrap',
            excluded: ':disabled',
            live: 'enabled',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },

            // Name Validation
            fields: {
                nameValidation: {
                    live: 'enabled',
                    trigger: 'keyup blur',
                    validators: {
                        stringLength: {
                            max: 30,
                            message: 'Name must be less than 30 characters.'
                        },
                        notEmpty: {
                            message: 'Name is required'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z][a-z\sA-Z0-9.,$;]*$/,
                            message: 'Name must begin with an alphabet'
                        }
                    }
                },
                nameValidationPlus: {
                    trigger: 'keyup blur',
                    validators: {
                        stringLength: {
                            max: 60,
                            message: 'Name must be less than 60 characters.'
                        },
                        notEmpty: {
                            message: 'Name is required'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z][a-z\sA-Z0-9.,$;]*$/,
                            message: 'Name must begin with an alphabet'
                        }
                    }
                },

                // Optional String Validation
                optStringValidation: {
                    trigger: 'keyup blur',
                    validators: {
                        regexp: {
                            regexp: /^[a-zA-Z][a-z\sA-Z0-9.,$;]*$/,
                            message: 'Must begin with an alphabet'
                        }
                    }
                },
                fPlaceOfBirth: {
                    trigger: 'keyup blur',
                    validators: {
                        notEmpty: {
                            message: 'Place of birth is required'
                        },
                        regexp: {
                            regexp: /^[a-z\s]+$/i,
                            message: 'Alphabets and spaces only'
                        }
                    }
                },

                // date validation
                dateAfterValidator: {
                    trigger: 'focus blur',
                    trigger: 'keyup blur',
                    validators: {
                        notEmpty: {
                            message: 'Please select a date'
                        },
                        date: {
                            min: dateAfter,
                            format: 'DD/MM/YYYY',
                            message: 'Date should be in the future'
                        }
                    }
                },
                dateBeforeValidator: {
                    trigger: 'focus blur',
                    trigger: 'keyup blur',
                    validators: {
                        notEmpty: {
                            message: 'Please select a date'
                        },
                        date: {
                            max: dateBefore,
                            format: 'DD/MM/YYYY',
                            message: 'Date should be in the past'
                        }
                    }
                },
                dateOfBirthValidation: {
                    trigger: 'focus blur',
                    trigger: 'keyup blur',
                    validators: {
                        notEmpty: {
                            message: 'Please select a date'
                        },
                        date: {
                            max: date18years,
                            format: 'DD/MM/YYYY',
                            message: 'Age should be at least 18'
                        }
                    }
                },

                // select Box Validation
                selectBoxValidation: {
                    trigger: 'blur',
                    trigger: 'keyup blur',
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },

                // Email Validation
                email: {
                    trigger: 'keyup blur',
                    validators: {
                        emailAddress: {
                            message: 'Invalid email address'
                        },
                        notEmpty: {
                            message: 'Please enter an email'
                        },
                        regexp: {
                            regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
                            message: 'Invalid email address'
                        }
                    }
                },

                // Zipcode Validation
                fMyAddPostcode1: {
                    trigger: 'keyup blur',
                    validators: {
                        zipCode: {
                            country: 'GB',
                            message: 'Please enter a valid UK Postcode'
                        }

                    }
                },

                // International Dailing code Validation
                countryCodeSelectBox: {
                    trigger: 'keyup blur',
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },
                phoneValidation: {
                    trigger: 'keyup blur',
                    validators: {
                        notEmpty: {
                            message: 'Please enter phone number'
                        },
                        phone: {
                            country: 'GB',
                            message: 'Invalid phone number'
                        }
                    }
                },

                // Integer Validation
                numberValidation: {
                    trigger: 'keyup blur',
                    validators: {
                        notEmpty: {
                            message: 'Please enter a number'
                        },
                        integer: {
                            message: 'Please enter a whole number'
                        }
                    }
                },
                fLoanSplit: {
                    trigger: 'keyup blur',
                    enabled: false,
                    validators: {
                        notEmpty: {
                            message: 'Please enter a number'
                        },
                        integer: {
                            message: 'Please enter a whole number'
                        },
                        between: {
                            min: 10,
                            max: 10,
                            message: 'Sum of these fields must be equal to the loan amount'
                        }

                    }
                },
                monthValidation: {
                    trigger: 'keyup blur',
                    validators: {
                        notEmpty: {
                            message: 'Please enter the month'
                        },
                        between: {
                            min: 1,
                            max: 12,
                            message: 'Month must be between 1 and 12'
                        }
                    }
                },
                borrowYears: {
                    trigger: 'keyup blur',
                    validators: {
                        notEmpty: {
                            message: 'Please enter the Year'
                        },
                        between: {
                            min: 10,
                            max: 30,
                            message: 'Years must be between 10 and 30'
                        }
                    }
                },
                yearValidation: {
                    trigger: 'keyup blur',
                    validators: {
                        notEmpty: {
                            message: 'Please enter the year'
                        },
                        stringLength: {
                            max: 4,
                            message: 'Invalid year'
                        },
                    }
                },
                accountNumberValidation: {
                    trigger: 'keyup blur',
                    validators: {
                        notEmpty: {
                            message: 'Please enter the year'
                        },
                        stringLength: {
                            min: 6,
                            max: 6,
                            message: 'Account number must be 6 digits'
                        },
                    }
                },
                minOneValidation: {
                    trigger: 'keyup blur',
                    validators: {
                        notEmpty: {
                            message: 'Please enter the year'
                        },
                        greaterThan: {
                            value: 1,
                            message: 'Must be minimum 1'
                        }
                    }
                },

                // Conditional Validation
                pMyAdd: {
                    enabled: false,
                    trigger: 'keyup blur',
                    validators: {
                        notEmpty: {
                            message: 'This is required since you have lived here for less than 3 years'
                        }
                    }
                },
                // Radio button validation
                fAgeConsent: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },
                fHadMortgage: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },
                fSaveAc: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },
                marketingMaterial: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },
                existingDebt: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },
                creditCard: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },
                marketingMaterial3parties: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },
                coutryCourt1: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },
                fUsValuation: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },
                fElectronicFee: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },
                fArrangeFee: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },
                fValuationFee: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },
                fHadWithin12: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },
                fPropToSell: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },
                fMainRes: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },
                currentAccount: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },
                Iva: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },
                f1FirstTime: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },
                f2FirstTime: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },
                fUsValuation: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },
                fArrangeFee: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },
                fValuationFee: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },
                criminalRecord: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },
                coutryCourt2: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },
                financialCommitments: {
                    validators: {
                        notEmpty: {
                            message: 'Please select an option'
                        }
                    }
                },
                fRequired: {
                    live: 'enabled',
                    validators: {
                        notEmpty: {
                            message: 'This is required'
                        }
                    }
                }
            }
        })
        .on('change', '[name="countryCodeSelectBox"]', function(e) {
            $('#contactDetailsForm').formValidation('revalidateField', 'phoneValidation');
        })
        .on('err.validator.fv', function(e, data) {
            if (data.field === 'email') {
                // The email field is not valid
                data.element
                    .data('fv.messages')
                    // Hide all the messages
                    .find('.help-block[data-fv-for="' + data.field + '"]').hide()
                    // Show only message associated with current validator
                    .filter('[data-fv-validator="' + data.validator + '"]').show();
            }
        });


    //All form validations start here for repeating fields
    // income

    var selectValidation = {
            excluded: ':disabled',
            live: 'enabled',
            trigger: 'blur',
            validators: {
                notEmpty: {
                    message: 'Please select an option'
                }
            }
        },
        dateAfterVal = {
            excluded: ':disabled',
            trigger: 'focus blur',
            live: 'enabled',
            validators: {
                notEmpty: {
                    message: 'Please select a date'
                },
                date: {
                    min: '',
                    format: 'DD/MM/YYYY',
                    message: 'Date should be in the future'
                }
            }
        },
        dateBeforeVal = {
            excluded: ':disabled',
            trigger: 'focus blur',
            live: 'enabled',
            validators: {
                notEmpty: {
                    message: 'Please select a date'
                },
                date: {
                    max: dateBefore,
                    format: 'DD/MM/YYYY',
                    message: 'Date should be in the past'
                }
            }
        },
        previousEmployeeEndValidator = {
            trigger: 'focus blur',
            validators: {
                notEmpty: {
                    message: 'Please select a date'
                },
                date: {
                    max: '',
                    format: 'DD/MM/YYYY',
                    message: 'Date should be before date of joining with your current employer'
                }
            }
        },
        numberValidator = {
            excluded: ':disabled',
            trigger: 'focus blur',
            live: 'enabled',
            validators: {
                notEmpty: {
                    message: 'Please enter a number'
                },
                integer: {
                    message: 'Please enter a whole number'
                }
            }
        },
        noValidation = {
            excluded: ':disabled',
            trigger: 'focus blur',
            live: 'enabled',
        },
        rowTitleemployee = 1; //incrementing employ tilte
    rowTitleIncome = 1; //incrementing income tilte
    rowTitleExpense = 1; //incrementing expense tilte
    rowTitlePrimary = 1; //incrementing primary tilte
    rowTitleSecondary = 1; //incrementing secondary tilte
    // rowTitleExpense = 1;
    idIndex = 1; //incrementing index of id
    forIndex = 1; //incrementing index of for
    employeeIndex = 1;
    incomeIndex = 1;
    expenseIndex = 1;
    primaryIndex = 1;
    secondaryIndex = 1;
    var getRowCrrentEmployTitle = $(".row-current-employ-title").text().split(" ")[0]; //getting employ title
    var getRowIncomTitle = $(".row-income-title").text().split(" ")[0]; //getting income title
    var getRowExpenseTitle = $(".row-expense-title").text().split(" ")[0]; //getting expense title
    var getRowPrimaryTitle = $(".row-primary-title").text().split(" ")[0]; //getting primary title
    var getRowSecondaryTitle = $(".row-secondary-title").text().split(" ")[0]; //getting secondary title

    // employ
    $('#previousCollapse')
        .formValidation({
            framework: 'bootstrap',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                'employee[0].category': selectValidation,
                'employee[0].status': selectValidation,
                'employee[0].job': selectValidation,
                'employee[0].time': selectValidation,
                'employee[0].starts': dateAfterVal,
                'employee[0].end': previousEmployeeEndValidator
            }
        })

    // Add button click handler
    .on('added.field.fv', function(e, data) {
            matchHeight();
            customPopover();
            darkenOnFocus();
            datePickerControl();
        })
        .on('click', '.add-employ', function() {
            rowTitleemployee++;
            employeeIndex++;
            forIndex++;
            idIndex++;
            var $template = $('#previousEmploymentHide'),
                $clone = $template
                .clone()
                .removeClass('hide')
                .removeAttr('id')
                .attr('data-employee-index', incomeIndex)
                .insertBefore($template);
            $clone
            // cloning id
                .find('[id="fPrEmplCategory"]').attr('id', 'fPrEmplCategory' + idIndex).end()
                .find('[id="fPrEmplStatus"]').attr('id', 'fPrEmplStatus' + idIndex).end()
                .find('[id="fPrJobDescription"]').attr('id', 'fPrJobDescription' + idIndex).end()
                .find('[id="fPrFullPartTime"]').attr('id', 'fPrFullPartTime' + idIndex).end()
                .find('[id="fPrEmplStart"]').attr('id', 'fPrEmplStart' + idIndex).end()
                .find('[id="fPrEmplEnd"]').attr('id', 'fPrEmplEnd' + idIndex).end()
                // cloning for
                .find('[class="employ-category-for child"]').attr('for', 'fPrEmplCategory' + forIndex).end()
                .find('[class="employ-status-for child"]').attr('for', 'fPrEmplStatus' + forIndex).end()
                .find('[class="employ-job-for child"]').attr('for', 'fPrJobDescription' + forIndex).end()
                .find('[class="employ-time-for child"]').attr('for', 'fPrFullPartTime' + forIndex).end()
                .find('[class="employ-retire-for child"]').attr('for', 'fPrEmplStart' + forIndex).end()
                .find('[class="employ-since-for child"]').attr('for', 'fPrEmplEnd' + forIndex).end()

            .find('[name="category"]').attr('name', 'employee[' + employeeIndex + '].category').end()
                .find('[name="status"]').attr('name', 'employee[' + employeeIndex + '].status').end()
                .find('[name="job"]').attr('name', 'employee[' + employeeIndex + '].job').end()
                .find('[name="time"]').attr('name', 'employee[' + employeeIndex + '].time').end()
                .find('[name="starts"]').attr('name', 'employee[' + employeeIndex + '].starts').end()
                .find('[name="end"]').attr('name', 'employee[' + employeeIndex + '].end').end()


            // cloning title
            .find(".row-title").html(getRowCrrentEmployTitle + " " + rowTitleemployee).end();


            // validation
            $('#previousCollapse')
                .formValidation('addField', 'employee[' + employeeIndex + '].category', selectValidation)
                .formValidation('addField', 'employee[' + employeeIndex + '].status', selectValidation)
                .formValidation('addField', 'employee[' + employeeIndex + '].job', selectValidation)
                .formValidation('addField', 'employee[' + employeeIndex + '].time', selectValidation)
                .formValidation('addField', 'employee[' + employeeIndex + '].starts', dateAfterVal)
                .formValidation('addField', 'employee[' + employeeIndex + '].end', previousEmployeeEndValidator);

        })


    // Remove button click handler
    .on('click', '.remove-employ', function() {
        var $row = $(this).parents('.clone-row'),
            index = $row.attr('data-employee-index');
        // Remove fields
        $('#previousCollapse')
            .formValidation('removeField', $row.find('[name="employee[' + index + '].category"]'))
            .formValidation('removeField', $row.find('[name="employee[' + index + '].status"]'))
            .formValidation('removeField', $row.find('[name="employee[' + index + '].job"]'))
            .formValidation('removeField', $row.find('[name="employee[' + index + '].time"]'))
            .formValidation('removeField', $row.find('[name="employee[' + index + '].starts"]'))
            .formValidation('removeField', $row.find('[name="employee[' + index + '].end"]'));
        $row.remove();
    });





    // // income
    $('#incomeCollapse')
        .formValidation({
            framework: 'bootstrap',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                'income[0].incomeType': selectValidation,
                'income[0].incomeAmount': numberValidator,
                'income[0].incomeFrequency': selectValidation,
                'income[0].incomeComments': noValidation
            }
        })

    // Add button click handler
    .on('added.field.fv', function(e, data) {
            matchHeight();
            customPopover();
            darkenOnFocus();
            datePickerControl();
        })
        .on('click', '.add-income', function() {
            rowTitleIncome++;
            incomeIndex++;
            forIndex++;
            idIndex++;
            var $template = $('#incomeClone'),
                $clone = $template
                .clone()
                .removeClass('hide')
                .removeAttr('id')
                .attr('data-income-index', incomeIndex)
                .insertBefore($template);
            $clone
            // cloning id
                .find('[id="fIncType"]').attr('id', 'fIncType' + idIndex).end()
                .find('[id="fIncAmt"]').attr('id', 'fIncAmt' + idIndex).end()
                .find('[id="fIncFreq"]').attr('id', 'fIncFreq' + idIndex).end()
                .find('[id="fIncDtls"]').attr('id', 'fIncDtls' + idIndex).end()
                // cloning for
                .find('[class="income-type-for child"]').attr('for', 'fIncType' + forIndex).end()
                .find('[class="amount-type-for child"]').attr('for', 'fIncAmt' + forIndex).end()
                .find('[class="income-freq-for child"]').attr('for', 'fIncFreq' + forIndex).end()
                .find('[class="details-for child"]').attr('for', 'fIncDtls' + forIndex).end()

            .find('[name="incomeType"]').attr('name', 'income[' + incomeIndex + '].incomeType').end()
                .find('[name="incomeAmount"]').attr('name', 'income[' + incomeIndex + '].incomeAmount').end()
                .find('[name="incomeFrequency"]').attr('name', 'income[' + incomeIndex + '].incomeFrequency').end()
                .find('[name="incomeComments"]').attr('name', 'income[' + incomeIndex + '].incomeComments').end()


            // cloning title
            .find(".row-title").html(getRowIncomTitle + " " + rowTitleIncome).end();


            // validation
            $('#incomeCollapse')
                .formValidation('addField', 'income[' + incomeIndex + '].incomeType', selectValidation)
                .formValidation('addField', 'income[' + incomeIndex + '].incomeAmount', numberValidator)
                .formValidation('addField', 'income[' + incomeIndex + '].incomeFrequency', selectValidation)
                .formValidation('addField', 'income[' + incomeIndex + '].incomeComments', noValidation);

        })


    // Remove button click handler
    .on('click', '.remove-income', function() {
        var $row = $(this).parents('.clone-row'),
            index = $row.attr('data-income-index');
        // Remove fields
        $('#incomeCollapse')
            .formValidation('removeField', $row.find('[name="income[' + index + '].incomeType"]'))
            .formValidation('removeField', $row.find('[name="income[' + index + '].incomeAmount"]'))
            .formValidation('removeField', $row.find('[name="income[' + index + '].incomeFrequency"]'))
            .formValidation('removeField', $row.find('[name="income[' + index + '].incomeComments"]'));
        $row.remove();
    });






    // // expense
    $('#expensesCollape')
        .formValidation({
            framework: 'bootstrap',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                'expense[0].expenseType': selectValidation,
                'expense[0].expenseAmount': numberValidator,
                'expense[0].expenseFrequency': selectValidation,
                'expense[0].expenseComments': noValidation
            }
        })

    // Add button click handler
    .on('added.field.fv', function(e, data) {
            matchHeight();
            customPopover();
            darkenOnFocus();
            datePickerControl();
        })
        .on('click', '.add-expense', function() {
            rowTitleExpense++;
            expenseIndex++;
            forIndex++;
            idIndex++;
            var $template = $('#expenseClone'),
                $clone = $template
                .clone()
                .removeClass('hide')
                .removeAttr('id')
                .attr('data-expense-index', expenseIndex)
                .insertBefore($template);
            $clone
            // cloning id
                .find('[id="fExpType"]').attr('id', 'fExpType' + idIndex).end()
                .find('[id="fExpAmt"]').attr('id', 'fExpAmt' + idIndex).end()
                .find('[id="fExpFreq"]').attr('id', 'fExpFreq' + idIndex).end()
                .find('[id="fExpDtls"]').attr('id', 'fExpDtls' + idIndex).end()
                // cloning for
                .find('[class="income-type-for child"]').attr('for', 'fExpType' + forIndex).end()
                .find('[class="amount-type-for child"]').attr('for', 'fExpAmt' + forIndex).end()
                .find('[class="income-freq-for child"]').attr('for', 'fExpFreq' + forIndex).end()
                .find('[class="details-for child"]').attr('for', 'fExpDtls' + forIndex).end()

            .find('[name="incomeType"]').attr('name', 'expense[' + expenseIndex + '].expenseType').end()
                .find('[name="expenseAmount"]').attr('name', 'expense[' + expenseIndex + '].expenseAmount').end()
                .find('[name="expenseFrequency"]').attr('name', 'expense[' + expenseIndex + '].expenseFrequency').end()
                .find('[name="expenseComments"]').attr('name', 'expense[' + expenseIndex + '].expenseComments').end()


            // cloning title
            .find(".row-title").html(getRowExpenseTitle + " " + rowTitleExpense).end();


            // validation
            $('#expensesCollape')
                .formValidation('addField', 'expense[' + expenseIndex + '].expenseType', selectValidation)
                .formValidation('addField', 'expense[' + expenseIndex + '].expenseAmount', numberValidator)
                .formValidation('addField', 'expense[' + expenseIndex + '].expenseFrequency', selectValidation)
                .formValidation('addField', 'expense[' + expenseIndex + '].expenseComments', noValidation);

        })


    // Remove button click handler
    .on('click', '.remove-expense', function() {
        var $row = $(this).parents('.clone-row'),
            index = $row.attr('data-expense-index');
        // Remove fields
        $('#expensesCollape')
            .formValidation('removeField', $row.find('[name="expense[' + index + '].expenseType"]'))
            .formValidation('removeField', $row.find('[name="expense[' + index + '].expenseAmount"]'))
            .formValidation('removeField', $row.find('[name="expense[' + index + '].expenseFrequency"]'))
            .formValidation('removeField', $row.find('[name="expense[' + index + '].expenseComments"]'));
        $row.remove();
    });






    // // primary
    $('#primaryCollapse')
        .formValidation({
            framework: 'bootstrap',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                'primaryDebt[0].primaryType': selectValidation,
                'primaryDebt[0].primaryBal': numberValidator,
                'primaryDebt[0].primarypayment': numberValidator,
                'primaryDebt[0].primaryfrequency': selectValidation,
                'primaryDebt[0].primarycomments': noValidation
            }
        })

    // Add button click handler
    .on('added.field.fv', function(e, data) {
            matchHeight();
            customPopover();
            darkenOnFocus();
            datePickerControl();
        })
        .on('click', '.add-primary', function() {
            rowTitlePrimary++;
            primaryIndex++;
            forIndex++;
            idIndex++;
            var $template = $('#primaryClone'),
                $clone = $template
                .clone()
                .removeClass('hide')
                .removeAttr('id')
                .attr('data-primary-index', expenseIndex)
                .insertBefore($template);
            $clone
            // cloning id
                .find('[id="fDbtType"]').attr('id', 'fDbtType' + idIndex).end()
                .find('[id="fDbtBal"]').attr('id', 'fDbtBal' + idIndex).end()
                .find('[id="fDbtAmt"]').attr('id', 'fDbtAmt' + idIndex).end()
                .find('[id="fDbtFreq"]').attr('id', 'fDbtFreq' + idIndex).end()
                .find('[id="fDbtDtls"]').attr('id', 'fDbtDtls' + idIndex).end()
                // cloning for
                .find('[class="primary-type-for child"]').attr('for', 'fDbtType' + forIndex).end()
                .find('[class="primary-bal-for child"]').attr('for', 'fDbtBal' + forIndex).end()
                .find('[class="primary-pay-for child"]').attr('for', 'fDbtAmt' + forIndex).end()
                .find('[class="primary-frequency-for child"]').attr('for', 'fDbtFreq' + forIndex).end()
                .find('[class="primary-comments-for child"]').attr('for', 'fDbtDtls' + forIndex).end()

            .find('[name="primaryType"]').attr('name', 'primaryDebt[' + primaryIndex + '].primaryType').end()
                .find('[name="primaryBal"]').attr('name', 'primaryDebt[' + primaryIndex + '].primaryBal').end()
                .find('[name="primarypayment"]').attr('name', 'primaryDebt[' + primaryIndex + '].primarypayment').end()
                .find('[name="primaryfrequency"]').attr('name', 'primaryDebt[' + primaryIndex + '].primaryfrequency').end()
                .find('[name="primarycomments"]').attr('name', 'primaryDebt[' + primaryIndex + '].primarycomments').end()


            // cloning title
            .find(".row-title").html(getRowPrimaryTitle + " " + rowTitlePrimary).end();


            // validation
            $('#primaryCollapse')
                .formValidation('addField', 'primaryDebt[' + primaryIndex + '].primaryType', selectValidation)
                .formValidation('addField', 'primaryDebt[' + primaryIndex + '].primaryBal', numberValidator)
                .formValidation('addField', 'primaryDebt[' + primaryIndex + '].primarypayment', numberValidator)
                .formValidation('addField', 'primaryDebt[' + primaryIndex + '].primaryfrequency', selectValidation)
                .formValidation('addField', 'primaryDebt[' + primaryIndex + '].primarycomments', noValidation);

        })


    // Remove button click handler
    .on('click', '.remove-primary', function() {
        var $row = $(this).parents('.clone-row'),
            index = $row.attr('data-primary-index');
        // Remove fields
        $('#primaryCollapse')
            .formValidation('removeField', $row.find('[name="primaryDebt[' + index + '].primaryType"]'))
            .formValidation('removeField', $row.find('[name="primaryDebt[' + index + '].primaryBal"]'))
            .formValidation('removeField', $row.find('[name="primaryDebt[' + index + '].primarypayment"]'))
            .formValidation('removeField', $row.find('[name="primaryDebt[' + index + '].primaryfrequency"]'))
            .formValidation('removeField', $row.find('[name="primaryDebt[' + index + '].primarycomments"]'));
        $row.remove();
    });








    // // secondary
    $('#secondaryCollapse')
        .formValidation({
            framework: 'bootstrap',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                'secondaryDebt[0].secondaryType': selectValidation,
                'secondaryDebt[0].secondaryBal': numberValidator,
                'secondaryDebt[0].secondarypayment': numberValidator,
                'secondaryDebt[0].secondaryfrequency': selectValidation,
                'secondaryDebt[0].secondarycomments': noValidation
            }
        })

    // Add button click handler
    .on('added.field.fv', function(e, data) {
            matchHeight();
            customPopover();
            darkenOnFocus();
            datePickerControl();
        })
        .on('click', '.add-secondary', function() {
            rowTitleSecondary++;
            secondaryIndex++;
            forIndex++;
            idIndex++;
            var $template = $('#secondaryHide'),
                $clone = $template
                .clone()
                .removeClass('hide')
                .removeAttr('id')
                .attr('data-secondary-index', expenseIndex)
                .insertBefore($template);
            $clone
            // cloning id
                .find('[id="fDbt2Type"]').attr('id', 'fDbt2Type' + idIndex).end()
                .find('[id="fDbt2Bal"]').attr('id', 'fDbt2Bal' + idIndex).end()
                .find('[id="fDbt2Amt"]').attr('id', 'fDbt2Amt' + idIndex).end()
                .find('[id="fDbt2Freq"]').attr('id', 'fDbt2Freq' + idIndex).end()
                .find('[id="fDbt2Dtls"]').attr('id', 'fDbt2Dtls' + idIndex).end()
                // cloning for
                .find('[class="secondary-type-for child"]').attr('for', 'fDbt2Type' + forIndex).end()
                .find('[class="secondary-bal-for child"]').attr('for', 'fDbt2Bal' + forIndex).end()
                .find('[class="secondary-pay-for child"]').attr('for', 'fDbt2Amt' + forIndex).end()
                .find('[class="secondary-frequency-for child"]').attr('for', 'fDbt2Freq' + forIndex).end()
                .find('[class="secondary-comments-for child"]').attr('for', 'fDbt2Dtls' + forIndex).end()

            .find('[name="secondaryType"]').attr('name', 'secondaryDebt[' + secondaryIndex + '].secondaryType').end()
                .find('[name="secondaryBal"]').attr('name', 'secondaryDebt[' + secondaryIndex + '].secondaryBal').end()
                .find('[name="secondarypayment"]').attr('name', 'secondaryDebt[' + secondaryIndex + '].secondarypayment').end()
                .find('[name="secondaryfrequency"]').attr('name', 'secondaryDebt[' + secondaryIndex + '].secondaryfrequency').end()
                .find('[name="secondarycomments"]').attr('name', 'secondaryDebt[' + secondaryIndex + '].secondarycomments').end()


            // cloning title
            .find(".row-title").html(getRowSecondaryTitle + " " + rowTitleSecondary).end();


            // validation
            $('#secondaryCollapse')
                .formValidation('addField', 'secondaryDebt[' + secondaryIndex + '].secondaryType', selectValidation)
                .formValidation('addField', 'secondaryDebt[' + secondaryIndex + '].secondaryBal', numberValidator)
                .formValidation('addField', 'secondaryDebt[' + secondaryIndex + '].secondarypayment', numberValidator)
                .formValidation('addField', 'secondaryDebt[' + secondaryIndex + '].secondaryfrequency', selectValidation)
                .formValidation('addField', 'secondaryDebt[' + secondaryIndex + '].secondarycomments', noValidation);

        })


    // Remove button click handler
    .on('click', '.remove-secondary', function() {
        var $row = $(this).parents('.clone-row'),
            index = $row.attr('data-primary-index');
        // Remove fields
        $('#secondaryCollapse')
            .formValidation('removeField', $row.find('[name="primaryDebt[' + index + '].primaryType"]'))
            .formValidation('removeField', $row.find('[name="primaryDebt[' + index + '].primaryBal"]'))
            .formValidation('removeField', $row.find('[name="primaryDebt[' + index + '].primarypayment"]'))
            .formValidation('removeField', $row.find('[name="primaryDebt[' + index + '].primaryfrequency"]'))
            .formValidation('removeField', $row.find('[name="primaryDebt[' + index + '].primarycomments"]'));
        $row.remove();
    });


    // Conditional Validation
    $('#myAddress').on('change', '[id="fMyAddHowLongLivedHere1"]', function(e) {
        livedyears = $("#fMyAddHowLongLivedHere1").val();

        if (parseInt(livedyears) < 3) {
            $('.rootwizard').formValidation('enableFieldValidators', 'pMyAdd', "true");
        } else {
            $('.rootwizard').formValidation('enableFieldValidators', 'pMyAdd', "false");
        }
    });


    $('#fMortPurp').on('change', function(e) {
        getMortPurp = $("#fMortPurp").val();
        if (getMortPurp == "remortgage") {
            $("#fRemorgageReason").attr("disabled", false);
        } else {
            $("#fRemorgageReason").attr("disabled", true);
        }
    });

    $(".PropToSell input[type='radio']").on('change', function(e) {
        var radioResult = $(this).serialize();
        if (radioResult.indexOf("Yes") >= 0) {
            $("#fPropSellValue").attr("disabled", false);
        } else {
            $("#fPropSellValue").attr("disabled", true);
        }
    });

    $(".fUsValuation input[type='radio']").on('change', function(e) {
        var radioResult = $(this).serialize();
        if (radioResult.indexOf("Yes") >= 0) {
            $("#fValType").attr("disabled", false);
        } else {
            $("#fValType").attr("disabled", true);
        }
    });

    $("#propertyCollapse .fUsValuation input[type='radio']").on('change', function(e) {
        var radioResult = $(this).serialize();
        if (radioResult == "fUsValuation=Yes") {
            $("#fValType").attr("disabled", false);
        } else {
            $("#fValType").attr("disabled", true);
        }
    });

    $(".fHadMortgage input[type='radio']").on('change', function(e) {
        var radioResult = $(this).serialize();
        if (radioResult == "fHadMortgage=Yes") {
            $(".fHadWithin12 label").each(function() {
                $(this).removeClass("disabled");
            });
        } else {
            $(".fHadWithin12 label").each(function() {
                $(this).addClass("disabled");
            });
        }
    });


    $(".fHadWithin12 input[type='radio']").on('change', function(e) {
        var radioResult = $(this).serialize();
        if (radioResult == "fHadWithin12=Yes") {
            $("#fHowManyIn12").attr("disabled", false);
        } else {
            $("#fHowManyIn12").attr("disabled", true);
        }
    });

    $(".additional-details input[type='radio']").on('change', function(e) {
        var radioResult = $(this).serialize();
        if (radioResult.indexOf("Yes") >= 0) {
            $("#fOtherDetails").attr("disabled", false);
        } else {
            $("#fOtherDetails").attr("disabled", true);
        }
    });
    //Check if sum of interest fields is equal to floanamt
    $('#fLoanAmt, #fCapInt,#fIntOnly').on('change', function(e) {
        var sum;
        var capitalInterest = parseInt($('#fCapInt').val());
        var interestOnly = parseInt($('#fIntOnly').val());
        sum = parseInt(capitalInterest + interestOnly);
        var loanAmt = parseInt($('#fLoanAmt').val());
        $('.rootwizard').formValidation('enableFieldValidators', 'fLoanSplit', "true");
        $('.rootwizard').formValidation('updateOption', 'fLoanSplit', 'between', 'max', loanAmt);
        $('.rootwizard').formValidation('updateOption', 'fLoanSplit', 'between', 'min', loanAmt);
        if (sum === loanAmt)
        {
            $('.rootwizard').formValidation('enableFieldValidators', 'fLoanSplit', "false");
        }
        else {
            $('.rootwizard').formValidation('enableFieldValidators', 'fLoanSplit', "true", 'between');
        }
    });

    // bootstrapWizard starts
    //Get all Tab IDs
    $(".tab-content .tab-pane").each(function() {
        flagalltabs.push(this.id);
    });
    //Get all invalid tabs
    $.grep(flagalltabs, function(el) {
        if (jQuery.inArray(el, flagvalidtabs) == -1) flaginvalidtabs.push(el);
    });
    $('.rootwizard').bootstrapWizard({
        tabClass: 'nav nav-pills',
        onTabClick: function(tab, navigation, index) {
            //Flag all invalid tabs
            $.each(flaginvalidtabs, function(index, value) {
                $('.nav-tabs li a[href*=' + value + ']').parent().removeClass("form-success").addClass("form-exclamatory");
            });
            //Flag all valid tabs
            $.each(flagvalidtabs, function(index, value) {
                $('.nav-tabs li a[href*=' + value + ']').parent().removeClass("form-exclamatory").addClass("form-success");
            });
            return true;
        },
        onNext: function(tab, navigation, index) {
            var numTabs = $('.rootwizard').find('.tab-pane').length,
                isValidTab = validateTab(index - 1);
            if (!isValidTab) {
                return false;
            } else {
                flagvalidtabs.push($('.rootwizard').find('.tab-pane').eq(index - 1).attr('id'));
                var validtabid = $('.rootwizard').find('.tab-pane').eq(index - 1).attr('id')
                flaginvalidtabs.splice(($.inArray(($('.rootwizard').find('.tab-pane').eq(index - 1).attr('id')), flaginvalidtabs)), 1);
                $('.nav-tabs li a[href*=' + validtabid + ']').parent().removeClass("form-exclamatory").addClass("form-success");
            }
            return true;
        },
        onPrevious: function(tab, navigation, index) {
            return true;
        },
        onTabShow: function(tab, navigation, index) {
            matchHeight();
            var $total = navigation.find('li').length;
            var $current = index + 1;
            var $percent = ($current / $total) * 100;
            $('#rootwizard').find('.bar').css({ width: $percent + '%' });
            // Update the label of Next button when we are at the last tab
            var numTabs = $('.rootwizard').find('.tab-pane').length;
            $('.rootwizard')
                .find('.next')
                .removeClass('disabled') // Enable the Next button

            .find('a')
                .html(index === numTabs - 1 ? 'Finish' : 'Next Step');
            if (index === numTabs - 1) {
                $('.rootwizard')
                    .find('.next').find("a").removeClass("btn-primary").addClass("btn-success");
            } else {
                $('.rootwizard').find('.next').find("a").removeClass("btn-success").addClass("btn-primary");

            }
        }
    });


    // isValidStep
    function validateTab(index) {
        var fv = $('.rootwizard').data('formValidation'), // FormValidation instance
            // The current tab
            $tab = $('.rootwizard').find('.tab-pane').eq(index);
        // Validate the container
        fv.validateContainer($tab);
        if ($tab.find('.re-run').length) {
            $('.rootwizard').find('.tab-pane').eq(index).find('.re-run').data('formValidation').validate();
        }
        var isValidStep = fv.isValidContainer($tab);

        // Do not jump to the target tab
        if (isValidStep === false || isValidStep === null) {
            var flag = 0;
            var getClass = $(".rootwizard").attr("class");
            $(".alert-validate").css({
                "display": "block"
            });
            $('.close').click(function() {
                $('.alert').hide();
            });
            return false;
        } else {
            var flag = 1;
            $(".alert-validate").css({
                "display": "none"
            });
            return true;
        }

        return true;
    }

});

$(window).load(function() {
    setTimeout(function() {
        $("option[value='Line']").attr("disabled", "disabled");
    }, 1000);
});
