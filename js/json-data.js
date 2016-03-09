$(document).ready(function() {

  //Get JSON data for Url
  function getUrlJson() {
    $.getJSON("./data/thingyouneedtoknowdocs.json", function(data) {
      var items = [];

      $.each(data, function(key, val) {
        $("#popOut").append("<a target=\"blank\"href='" + val.url + "'>" + val.thingsyouneedtoknowdocs + "</a>");
      });
    });
  }
  getUrlJson();


  //Get JSON data for Url
  function getDocJson() {
    $.getJSON("./data/documentstoupload.json", function(data) {
      var i=0;
      $('.upload-file-row:eq(0)').removeClass('hide');
      $.each(data, function(key, val) {
        // i++;

        $('.upload-file-row:eq('+i+')').clone().appendTo('.document-required form').removeClass('hide');
        $('.doc-file:eq('+i+')').append("<p class='document-name'>"+data[i].Documentsttoupload+"</p>");
        ++i;
      });
      $('.upload-file-row:eq('+i+')').addClass('hide');
    });
  }
  getDocJson();


  //Get JSON data for Title
  function getTitleJson() {
    $.getJSON("./data/title.json", function(data) {
      var items = [];
      $.each(data, function(key, val) {
        $('.ftitle-json').append("<option value=" + val.id + ">" + val.title + "</option>");
      });
    });
  }
  getTitleJson();

  //Get JSON data for Marital Status
  function getMaritalStatusJson() {
    $.getJSON("./data/maritalstatus.json", function(data) {
      var items = [];
      $.each(data, function(key, val) {
        $('#fMaritalStatus').append("<option value=" + val.id + ">" + val.mstatus + "</option>");
      });
    });
  }
  getMaritalStatusJson();

  //Get JSON data for Gender
  function getGenderJson() {
    $.getJSON("./data/gender.json", function(data) {
      var items = [];
      $.each(data, function(key, val) {
        $('#fSex').append("<option value=" + val.id + ">" + val.gender + "</option>");
      });
    });
  }
  getGenderJson();

  //Get JSON data for Countries
  function getCountriesJson() {
    $.getJSON("./data/countries_pref.json", function(data) {
      var items = [];
      $.each(data, function(key, val) {
        $('.nationality-json').append("<option value=" + val.code + ">" + val.name + "</option>");
      });
    });
  }
  getCountriesJson();

  //Get JSON data for County
  function getCountiesJson() {
    $.getJSON("./data/ukcounties.json", function(data) {
      var items = [];
      $.each(data, function(key, val) {
        $('#fMyAddCounty1').append("<option value=" + val.id + ">" + val.countyname + "</option>");
      });
    });
  }
  getCountiesJson();

  //Get JSON data for Income Type
  function getIncomeTypeJson() {
    $.getJSON("./data/incometype.json", function(data) {
      var items = [];
      $.each(data, function(key, val) {
        $('.income-json').append("<option value=" + val.id + ">" + val.incometype + "</option>");
      });
    });
  }
  getIncomeTypeJson();

  //Get JSON data for Frequency Type - income
  function getFrequencyJson() {
    $.getJSON("./data/frequency.json", function(data) {
      var items = [];
      $.each(data, function(key, val) {
        $('.frequence-json').append("<option value=" + val.id + ">" + val.frequency + "</option>");
      });
    });
  }
  getFrequencyJson();

  //Get JSON data for Expenditure Type
  function getExpenditureTypeJson() {
    $.getJSON("./data/expendituretype.json", function(data) {
      var items = [];
      $.each(data, function(key, val) {
        $('#fExpType').append("<option value=" + val.id + ">" + val.expendituretype + "</option>");
      });
    });
  }
  getExpenditureTypeJson();

  //Get JSON data for Primarydebt Type
  function getPrimaryDebtTypeJson() {
    $.getJSON("./data/primarydebttype.json", function(data) {
      var items = [];
      $.each(data, function(key, val) {
        $('#fDbtType').append("<option value=" + val.id + ">" + val.primarydebttype + "</option>");
      });
    });
  }
  getPrimaryDebtTypeJson();

  //Get JSON data for Secondarydebt Type
  function getSecondaryDebtTypeJson() {
    $.getJSON("./data/secondarydebttype.json", function(data) {
      var items = [];
      $.each(data, function(key, val) {
        $('#fDbt2Type').append("<option value=" + val.id + ">" + val.secondarydebttype + "</option>");
      });
    });
  }
  getSecondaryDebtTypeJson();

  //Get JSON data for Residential Status- My address
  function getResidentialStatusJson() {
    $.getJSON("./data/residentialstatus.json", function(data) {
      var items = [];
      $.each(data, function(key, val) {
        $('#fMyAddResidentialStatus1').append("<option value=" + val.id + ">" + val.gender + "</option>");
      });
    });
  }
  getResidentialStatusJson();

  //Get JSON data for Work Type -current
  function getWorkType() {
    $.getJSON("./data/worktype.json", function(data) {
      var items = [];
      $.each(data, function(key, val) {
        $('.full-time-json').append("<option value=" + val.id + ">" + val.worktype + "</option>");
      });
    });
  }
  getWorkType();

  //Get JSON data for Employment Category- My address-current
  function getEmploymentCategoryJson() {
    $.getJSON("./data/employmentcategory.json", function(data) {
      var items = [];
      $.each(data, function(key, val) {
        // $('#fEmplCategory').append("<option value=" + val.id + ">" + val.empstat + "</option>");
        $('.employ-category-json').append("<option value=" + val.id + ">" + val.empstat + "</option>");
      });
    });
  }
  getEmploymentCategoryJson();

  //Get JSON data for Employment Status- My address-current
  function getEmploymentStatusJson() {
    $.getJSON("./data/employmentstatus.json", function(data) {
      var items = [];
      $.each(data, function(key, val) {
        $('.employ-status-json').append("<option value=" + val.id + ">" + val.empstatus + "</option>");
      });
    });
  }
  getEmploymentStatusJson();

  //Get JSON data for Job Description- My address-current
  function getJobDescriptionJson() {
    $.getJSON("./data/jobdescription.json", function(data) {
      var items = [];
      $.each(data, function(key, val) {
        $('.job-desc-json').append("<option value=" + val.id + ">" + val.jobdesc + "</option>");
      });
    });
  }
  getJobDescriptionJson();

  //Get JSON data for Preferred Contact- Contact Details
  function getPrefContactJson() {
    $.getJSON("./data/prefcontact.json", function(data) {
      var items = [];
      $.each(data, function(key, val) {
        $('#fPrefContact').append("<option value=" + val.id + ">" + val.prefcontact + "</option>");
      });
    });
  }
  getPrefContactJson();

  //Get JSON data for Preferred Contact Time- Contact Details
  function getPrefContactTimeJson() {
    $.getJSON("./data/prefcontacttime.json", function(data) {
      var items = [];
      $.each(data, function(key, val) {
        $('#fPrefContactTime').append("<option value=" + val.id + ">" + val.prefcontacttime + "</option>");
      });
    });
  }
  getPrefContactTimeJson();

  //Get JSON data for Tax Resident
  function getTaxResidentJson() {
    $.getJSON("./data/taxresident.json", function(data) {
      var items = [];
      $.each(data, function(key, val) {
        $('#fTaxResident').append("<option value=" + val.id + ">" + val.taxresident + "</option>");
      });
    });
  }
  getTaxResidentJson();

  //Get JSON data for Inter-national tel-code
  function getinternationtCodeJson() {
    $.getJSON("./data/internationaldialingcode.json", function(data) {
      var items = [];
      $.each(data, function(key, val) {
        $('.interNationalCode').append("<option value=" + val.code + ">" + val.dial_code + "</option>");
      });
    });
  }
  getinternationtCodeJson();

  //Get JSON data for Preferred Contact Time- Contact Details
  function getPurposeofLoanJson() {
    $.getJSON("./data/purposeofloan.json", function(data) {
      var items = [];
      $.each(data, function(key, val) {
        $('#fLoanPurp').append("<option value=" + val.id + ">" + val.purposeofloan + "</option>");
      });
    });
  }
  getPurposeofLoanJson();

  //Get JSON data for Preferred Contact Time- Contact Details
  function getMortgagePurposeJson() {
    $.getJSON("./data/mortgagepurpose.json", function(data) {
      var items = [];
      $.each(data, function(key, val) {
        $('#fMortPurp').append("<option value=" + val.id + ">" + val.mortgagepurpose + "</option>");
      });
    });
  }
  getMortgagePurposeJson();

  //Get JSON data for Mortgage Products- Mortgage
  function getMortgageProductsJson() {
    $.getJSON("./data/mortgageproducts.json", function(data) {
      var items = [];
      $.each(data, function(key, val) {
        $('#fProductType').append("<option value=" + val.id + ">" + val.mortgageproducts + "</option>");
      });
    });
  }
  getMortgageProductsJson();

  //Get JSON data for Single or Joint- Mortgage
  function getSingleorJointJson() {
    $.getJSON("./data/singleorjoint.json", function(data) {
      var items = [];
      $.each(data, function(key, val) {
        $('#fSingJoint').append("<option value=" + val.id + ">" + val.singleorjoint + "</option>");
      });
    });
  }
  getSingleorJointJson();

  //Get JSON data for Remotgage Reason- Mortgage
  function getRemortgageReasonJson() {
    $.getJSON("./data/remortgagereason.json", function(data) {
      var items = [];
      $.each(data, function(key, val) {
        $('#fRemorgageReason').append("<option value=" + val.id + ">" + val.remotgagereason + "</option>");
      });
    });
  }
  getRemortgageReasonJson();

  //Get JSON data for Valuation Type- Mortgage
  function getValuationTypeJson() {
    $.getJSON("./data/valuationtype.json", function(data) {
      var items = [];
      $.each(data, function(key, val) {
        $('#fValType').append("<option value=" + val.id + ">" + val.valuationtype + "</option>");
      });
    });
  }
  getValuationTypeJson();

  //Get JSON data for ISA Type
  function getISAtypeJson() {
    $.getJSON("./data/isatype.json", function(data) {
      var items = [];
      $.each(data, function(key, val) {
        $('#fISAType').append("<option value=" + val.id + ">" + val.isatype + "</option>");
      });
    });
  }
  getISAtypeJson();

  //Get JSON data for ISA Interest Pay Frequency
  function getISAInterestpayFrequencyJson() {
    $.getJSON("./data/isainterestpayfrequency.json", function(data) {
      var items = [];
      $.each(data, function(key, val) {
        $('#fIntPayFreq').append("<option value=" + val.id + ">" + val.isainterestpayfrequency + "</option>");
      });
    });
  }
  getISAInterestpayFrequencyJson();
});
