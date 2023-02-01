import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson01',
  templateUrl: './lesson01.component.html',
  styleUrls: ['./lesson01.component.scss']
})
export class Lesson01Component {
  private goodWord = 'word here...';
  private badWord = 'Please write a word!';
  private goodText = 'text here...';
  private badText = 'Please write a text!';

  public userData = {
    word: '',
    badWord: '',
    cenzorText: '',
    errorWord: false,
    errorText: false,
    placeWord: this.goodWord,
    placeText: this.goodText
  }

  constructor() { }

  ngOnInit(): void {
  }

  private checkWord(): boolean {
    if (this.userData.word.length == 0) {
      this.userData.errorWord = true;
      this.userData.placeWord = this.badWord;
      return false;
    } else {
      this.setWordGood();
      return true;
    }


  }

  private checkBadWord(): boolean {
    if (this.userData.badWord.length == 0) {
      this.userData.errorWord = true;
      this.userData.placeWord = this.badWord;
      return false;
    } else {
      this.setWordGood();
      return true;
    }


  }

  private checkText(): boolean {
    if (this.userData.cenzorText.length == 0) {
      this.userData.errorText = true;
      this.userData.placeText = this.badText;
      return false;
    } else { 
      this.setTextGood();
      return true;
    }
  }

  private setTextGood(): void {
    this.userData.errorText = false;
    this.userData.placeText = this.goodText;
  }

  private setWordGood(): void {
    this.userData.errorWord = false;
    this.userData.placeWord = this.goodWord;
  }

  onAddClick() {
    if (!this.checkWord()) {
      return
    }

    if (this.userData.badWord.length > 0) {
        this.userData.badWord += ',' + this.userData.word;
    } else {
        this.userData.badWord = this.userData.word;
    }

    this.userData.word = '';
  }

  onResetClick() {
    this.userData.badWord = '';
    this.userData.word = '';
    this.userData.cenzorText = '';
    this.userData.errorWord = false;
    this.userData.errorText = false;
  }

  onCenzorChange() {
    if (this.userData.errorText) { this.setTextGood() };
  }

  onWordChange() {
    if (this.userData.errorWord) { this.setWordGood() };
  }

  onCenzorClick() {
    if (!this.checkText()) {
      return;
    }

    if (!this.checkBadWord()) {
      return;
    }


    let arrText = this.userData.badWord.split(',');
    arrText.forEach((element) => {
      let newElem = '*'.repeat(element.length);
      let re: RegExp = new RegExp(`\\b${element}\\b`, 'gi');
      this.userData.cenzorText = this.userData.cenzorText.replace(re, newElem);
    })

  }

}

