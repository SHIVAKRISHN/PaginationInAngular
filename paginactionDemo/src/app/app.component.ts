import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = 'Angular';
  characters = [
      'Finn the human',
      'Jake the dog',
      'Princess bubblegum',
      'Lumpy Space Princess',
      'Beemo1',
      'Beemo2'
    ]

  title = 'app';
  p: number = 1;
  collection: any[] = 
  [
    {
        "name": "Item 1"
    },
    {
        "name": "Item 2"
    },
    {
        "name": "Item 3"
    },
    {
        "name": "Item 4"
    },
    {
        "name": "Item 5"
    },
    {
        "name": "Item 6"
    },
    {
        "name": "Item 7"
    },
    {
        "name": "Item 8"
    },
    {
        "name": "Item 9"
    },
    {
        "name": "Item 10"
    },
    {
        "name": "Item 11"
    },
    {
        "name": "Item 12"
    },
    {
        "name": "Item 13"
    },
    {
        "name": "Item 14"
    },
    {
        "name": "Item 15"
    },
    {
        "name": "Item 16"
    },
    {
        "name": "Item 17"
    },
    {
        "name": "Item 18"
    },
    {
        "name": "Item 19"
    },
    {
        "name": "Item 20"
    },
    {
        "name": "Item 21"
    },
    {
        "name": "Item 22"
    },
    {
        "name": "Item 23"
    },
    {
        "name": "Item 24"
    },
    {
        "name": "Item 25"
    },
    {
        "name": "Item 26"
    },
    {
        "name": "Item 27"
    },
    {
        "name": "Item 28"
    },
    {
        "name": "Item 29"
    },
    {
        "name": "Item 30"
    },
    {
        "name": "Item 31"
    },
    {
        "name": "Item 32"
    },
    {
        "name": "Item 33"
    },
    {
        "name": "Item 34"
    },
    {
        "name": "Item 35"
    },
    {
        "name": "Item 36"
    },
    {
        "name": "Item 37"
    },
    {
        "name": "Item 38"
    },
    {
        "name": "Item 39"
    },
    {
        "name": "Item 40"
    },
    {
        "name": "Item 41"
    },
    {
        "name": "Item 42"
    },
    {
        "name": "Item 43"
    },
    {
        "name": "Item 44"
    },
    {
        "name": "Item 45"
    },
    {
        "name": "Item 46"
    },
    {
        "name": "Item 47"
    },
    {
        "name": "Item 48"
    },
    {
        "name": "Item 49"
    },
    {
        "name": "Item 50"
    },
    {
        "name": "Item 51"
    },
    {
        "name": "Item 52"
    },
    {
        "name": "Item 53"
    },
    {
        "name": "Item 54"
    },
    {
        "name": "Item 55"
    },
    {
        "name": "Item 56"
    },
    {
        "name": "Item 57"
    },
    {
        "name": "Item 58"
    },
    {
        "name": "Item 59"
    },
    {
        "name": "Item 60"
    },
    {
        "name": "Item 61"
    },
    {
        "name": "Item 62"
    },
    {
        "name": "Item 63"
    },
    {
        "name": "Item 64"
    },
    {
        "name": "Item 65"
    },
    {
        "name": "Item 66"
    },
    {
        "name": "Item 67"
    },
    {
        "name": "Item 68"
    },
    {
        "name": "Item 69"
    },
    {
        "name": "Item 70"
    },
    {
        "name": "Item 71"
    },
    {
        "name": "Item 72"
    },
    {
        "name": "Item 73"
    },
    {
        "name": "Item 74"
    },
    {
        "name": "Item 75"
    },
    {
        "name": "Item 76"
    },
    {
        "name": "Item 77"
    },
    {
        "name": "Item 78"
    },
    {
        "name": "Item 79"
    },
    {
        "name": "Item 80"
    },
    {
        "name": "Item 81"
    },
    {
        "name": "Item 82"
    },
    {
        "name": "Item 83"
    },
    {
        "name": "Item 84"
    },
    {
        "name": "Item 85"
    },
    {
        "name": "Item 86"
    },
    {
        "name": "Item 87"
    },
    {
        "name": "Item 88"
    },
    {
        "name": "Item 89"
    },
    {
        "name": "Item 90"
    },
    {
        "name": "Item 91"
    },
    {
        "name": "Item 92"
    },
    {
        "name": "Item 93"
    },
    {
        "name": "Item 94"
    },
    {
        "name": "Item 95"
    },
    {
        "name": "Item 96"
    },
    {
        "name": "Item 97"
    },
    {
        "name": "Item 98"
    },
    {
        "name": "Item 99"
    },
    {
        "name": "Item 100"
    },
    {
        "name": "Item 101"
    },
    {
        "name": "Item 102"
    },
    {
        "name": "Item 103"
    },
    {
        "name": "Item 104"
    },
    {
        "name": "Item 105"
    },
    {
        "name": "Item 106"
    },
    {
        "name": "Item 107"
    },
    {
        "name": "Item 108"
    },
    {
        "name": "Item 109"
    },
    {
        "name": "Item 110"
    },
    {
        "name": "Item 111"
    },
    {
        "name": "Item 112"
    },
    {
        "name": "Item 113"
    },
    {
        "name": "Item 114"
    },
    {
        "name": "Item 115"
    },
    {
        "name": "Item 116"
    },
    {
        "name": "Item 117"
    },
    {
        "name": "Item 118"
    },
    {
        "name": "Item 119"
    },
    {
        "name": "Item 120"
    },
    {
        "name": "Item 121"
    },
    {
        "name": "Item 122"
    },
    {
        "name": "Item 123"
    },
    {
        "name": "Item 124"
    },
    {
        "name": "Item 125"
    },
    {
        "name": "Item 126"
    },
    {
        "name": "Item 127"
    },
    {
        "name": "Item 128"
    },
    {
        "name": "Item 129"
    },
    {
        "name": "Item 130"
    },
    {
        "name": "Item 131"
    },
    {
        "name": "Item 132"
    },
    {
        "name": "Item 133"
    },
    {
        "name": "Item 134"
    },
    {
        "name": "Item 135"
    },
    {
        "name": "Item 136"
    },
    {
        "name": "Item 137"
    },
    {
        "name": "Item 138"
    },
    {
        "name": "Item 139"
    },
    {
        "name": "Item 140"
    },
    {
        "name": "Item 141"
    },
    {
        "name": "Item 142"
    },
    {
        "name": "Item 143"
    },
    {
        "name": "Item 144"
    },
    {
        "name": "Item 145"
    },
    {
        "name": "Item 146"
    },
    {
        "name": "Item 147"
    },
    {
        "name": "Item 148"
    },
    {
        "name": "Item 149"
    },
    {
        "name": "Item 150"
    },
    {
        "name": "Item 151"
    },
    {
        "name": "Item 152"
    },
    {
        "name": "Item 153"
    },
    {
        "name": "Item 154"
    },
    {
        "name": "Item 155"
    },
    {
        "name": "Item 156"
    }
]
}
