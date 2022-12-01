import getInspectionQuestions from '@salesforce/apex/InspectionQuestionsLWCController.getInspectionQuestions';
import Ans_Fields from "@salesforce/schema/Inspection_Question__c.Answer__c";
import Id_Field from "@salesforce/schema/Inspection_Question__c.Id";
import Insp_Id_Field from "@salesforce/schema/Inspection_Report__c.Id";
import Followup_Fields from "@salesforce/schema/Inspection_Report__c.Needs_Follow_Up_Audit__c";
import { updateRecord } from "lightning/uiRecordApi";
import { api, LightningElement } from 'lwc';
export default class CeasAfoScoreCardQuestions extends LightningElement {
    @api recordId;
    recorddata;
    section1Val;
    section2Val;
    section3Val;
    section4Val;
    section5Val;
    section6Val;
    section7Val;
    section8Val;
    section9Val;
    showQuestionVal = false;
    buttondisabled = true;
    callonce = false;
    section1Questions = [];
    @api section2Questions = [];
    @api section3Questions = [];
    @api section4Questions = [];
    @api section5Questions = [];
    @api section6Questions = [];
    @api section7Questions = [];
    @api section8Questions = [];
    @api section9Questions = [];
    saveresponse = [];
    get options() {
        return [
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
        ];
    }
    renderedCallback() {

        setTimeout(() => {
            if (!this.callonce) {
                getInspectionQuestions({ recordId: this.recordId })
                    .then((result) => {
                        if (result) {
                            this.recorddata = result;
                            this.error = null;
                            this.setSectionQuestions();
                        }
                    })
                this.callonce = true;
            }
        }, 2000);
    }

    setSectionQuestions() {
        for (let i = 0; i < this.recorddata.length; i++) {
            const quesRec = this.recorddata[i].InspQuestionObj;
            this.showQuestionVal = true;
            if (quesRec.Question_Type__c === 'Section') {
                switch (quesRec.Section_Number__c) {
                    case 1:
                        this.section1Val = quesRec.Question_Text__c;
                        break;
                    case 2:
                        this.section2Val = quesRec.Question_Text__c;
                        break;
                    case 3:
                        this.section3Val = quesRec.Question_Text__c;
                        break;
                    case 4:
                        this.section4Val = quesRec.Question_Text__c;
                        break;
                    case 5:
                        this.section5Val = quesRec.Question_Text__c;
                        break;
                    case 6:
                        this.section6Val = quesRec.Question_Text__c;
                        break;
                    case 7:
                        this.section7Val = quesRec.Question_Text__c;
                        break;
                    case 8:
                        this.section8Val = quesRec.Question_Text__c;
                        break;
                    case 9:
                        this.section9Val = quesRec.Question_Text__c;
                        break;
                }
            }
            else {
                switch(quesRec.Section_Number__c) {
                    case 1:
                        const firstsectionquestion = {
                            "inspquestion": quesRec,
                            "checkbox": this.recorddata[i].isCheckBox,
                            "Number": this.recorddata[i].isNumeric
                        }
                        this.section1Questions.push(firstsectionquestion);
                        break;
                    case 2:
                        this.section2Questions.push(quesRec);
                        break;
                    case 3:
                        this.section3Questions.push(quesRec);
                        break;
                    case 4:
                        this.section4Questions.push(quesRec);
                        break;
                    case 5:
                        const fivethsectionquestion = {
                            "inspquestion": quesRec,
                            "checkbox": this.recorddata[i].isCheckBox,
                            "Number": this.recorddata[i].isNumeric
                        }
                        this.section5Questions.push(fivethsectionquestion);
                        break;
                    case 6:
                        this.section6Questions.push(quesRec);
                        break;
                    case 7:
                        this.section7Questions.push(quesRec);
                        break;
                    case 8:
                        this.section8Questions.push(quesRec);
                        break;
                    case 9:
                        this.section9Questions.push(quesRec);
                        break;
                }
            }
        }
    }

    updateClassName(option, [...group]) {
        var className = option === 'No' ? 'displaySubQuestion' : 'SubQuestion';
        for (let i = 0; i < group.length; i++) {
            this.template.querySelector(`[data-id="${group[i]}"]`).className = className;
        }

    }

    handleChange(event) {
        const selectedOption = event.detail.value;
        const indexValue = event.target.dataset.index;
        const key = event.target.dataset.item;
        this.handlesaverecord(key, selectedOption);
        if (selectedOption === "Yes" || selectedOption === "No") {
            switch(indexValue) {
                case "2":
                    this.updateClassName(selectedOption, [3, 4, 5]);
                    break;
                case "6":
                    this.updateClassName(selectedOption, [7, 8, 9, 10, 11, 12, 13, 14, 15]);
                    break;
                case "20":
                    this.updateClassName(selectedOption, [21, 22, 23, 24, 25]);
                    break;
                case "26":
                    this.updateClassName(selectedOption, [27, 28, 29, 30]);
                    break;
                case "31":
                    this.updateClassName(selectedOption, [32, 33, 34, 35, 36, 37, 38, 39, 40]);
                    break;
                case "41":
                    this.updateClassName(selectedOption, [42, 43, 44]);
                    break;
                case "46":
                    this.updateClassName(selectedOption, [47, 48, 49, 50, 51, 52]);
                    break;
                case "53":
                    this.updateClassName(selectedOption, [54, 55, 56, 57, 58, 59]);
                    break;
                case "60":
                    this.updateClassName(selectedOption, [61, 62, 63, 64, 65, 66, 67]);
                    break;
                case "68":
                    this.updateClassName(selectedOption, [69, 70, 71]);
                    break;
                case "72":
                    this.updateClassName(selectedOption, [73, 74, 75, 76, 77]);
                    break;
                case "79":
                    this.updateClassName(selectedOption, [80, 81]);
                    break;
                case "83":
                    this.updateClassName(selectedOption, [84, 85, 86, 87]);
                    break;
                case "88":
                    this.updateClassName(selectedOption, [89, 90, 91, 92, 93, 94, 95]);
                    break;
                case "96":
                    this.updateClassName(selectedOption, [97, 98, 99, 100]);
                    break;
                case "101":
                    this.updateClassName(selectedOption, [102, 103, 104, 105, 106]);
                    break;
            }
        }
    }

    handleSection2Change(event) {
        const selectedOption = event.detail.value;
        const indexValue = event.target.dataset.index;
        const key = event.target.dataset.item;
        this.handlesaverecord(key, selectedOption);

        if(selectedOption === "No" || selectedOption === "Yes") {
            switch(indexValue) {
                case "6":
                    this.updateClassName(selectedOption, [7, 8]);
                    break;
                case "12":
                    this.updateClassName(selectedOption, [13, 14]);
                    break;
            }
        }
    }

    handleSection3Change(event) {
        const selectedOption = event.detail.value;
        const indexValue = event.target.dataset.index;
        const key = event.target.dataset.item;
        this.handlesaverecord(key, selectedOption);

        if(selectedOption === "No" || selectedOption === "Yes") {
            switch(indexValue) {
                case "0":
                    this.updateClassName(selectedOption, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
                    break;
                case "11":
                    this.updateClassName(selectedOption, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]);
                    break;
                case "24":
                    this.updateClassName(selectedOption, [25, 26]);
                    break;
            }
        }
    }

    handleSection4Change(event) {
        const selectedOption = event.detail.value;
        const indexValue = event.target.dataset.index;
        const key = event.target.dataset.item;
        this.handlesaverecord(key, selectedOption);

        if(selectedOption === "No" || selectedOption === "Yes") {
            switch(indexValue) {
                case "0":
                    this.updateClassName(selectedOption, [1, 2, 3, 4]);
                    break;
                case "6":
                    this.updateClassName(selectedOption, [7, 8]);
                    break;
                case "9":
                    this.updateClassName(selectedOption, [10, 11, 12, 13]);
                    break;
                case "14":
                    this.updateClassName(selectedOption, [15, 16, 17, 18, 19, 20]);
                    break;
            }
        }
    }

    handleSection5Change(event) {
        const selectedOption = event.detail.value;
        const indexValue = event.target.dataset.index;
        const key = event.target.dataset.item;
        this.handlesaverecord(key, selectedOption);

        if(selectedOption === "No" || selectedOption === "Yes") {
            switch(indexValue) {
                case "1":
                    this.updateClassName(selectedOption, [2, 3, 4, 5]);
                    break;
                case "7":
                    this.updateClassName(selectedOption, [8, 9, 10]);
                    break;
            }
        }
    }

    handleSection6Change(event) {
        const selectedOption = event.detail.value;
        const indexValue = event.target.dataset.index;
        const key = event.target.dataset.item;
        this.handlesaverecord(key, selectedOption);
        if (indexValue === "0" && (selectedOption === "Yes" || selectedOption === "No")) {
            this.updateClassName(selectedOption, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
        }
    }

    handleSection7Change(event) {
        const selectedOption = event.detail.value;
        const key = event.target.dataset.item;
        if (selectedOption === 'No') {
            this.handleinspsaverecord(this.recordId, true);
        }
        this.handlesaverecord(key, selectedOption);
    }
    handleSection8Change(event) {
        const selectedOption = event.detail.value;
        const indexValue = event.target.dataset.index;
        const key = event.target.dataset.item;
        this.handlesaverecord(key, selectedOption);
        if (indexValue === "0" && (selectedOption === "Yes" || selectedOption === "No")) {
            this.updateClassName(selectedOption, [1, 2, 3]);
        }
    }

    handleSection9Change(event) {
        const selectedOption = event.detail.value;
        const key = event.target.dataset.item;
        this.handlesaverecord(key, selectedOption);
    }

    handlesaverecord(recordId, answervalue) {
        const fields = {};
        fields[Id_Field.fieldApiName] = recordId;
        fields[Ans_Fields.fieldApiName] = answervalue;
        const recordInput = { fields }
        this.saveresponse.push(recordInput);
    }

    handleinspsaverecord(recordId, answervalue) {
        const fields = {};
        fields[Insp_Id_Field.fieldApiName] = recordId;
        fields[Followup_Fields.fieldApiName] = answervalue;
        const recordInput = { fields }
        this.saveresponse.push(recordInput);
    }

    handlesavebutton() {
        for (let i = 0; i < this.saveresponse.length; i++) {
            updateRecord(this.saveresponse[i]).then((record) => {
            })
        }
    }
    oncheckboxselect(event) {
        const checkboxoption = event.target.checked;
        if (checkboxoption) {
            this.buttondisabled = false;
        }
        else {
            this.buttondisabled = true;
        }
    }
}
