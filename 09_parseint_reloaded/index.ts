// https://www.codewars.com/kata/525c7c5ab6aecef16e0001a5

class NumberMap {
  private nMap: Record<string, number>;

  constructor() {
    this.nMap = {
      zero: 0,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
      ten: 10,
      eleven: 11,
      twelve: 12,
      thirteen: 13,
      fourteen: 14,
      fifteen: 15,
      sixteen: 16,
      seventeen: 17,
      eighteen: 18,
      nineteen: 19,
      twenty: 20,
      thirty: 30,
      forty: 40,
      fifty: 50,
      sixty: 60,
      seventy: 70,
      eighty: 80,
      ninety: 90,
    };
  }

  getOrThrow(item: string) {
    const result = this.nMap[item];

    console.log(item);
    if (result === undefined) {
      throw new Error("No valid mapping available");
    }
    return result;
  }
}

const TENS_REGEX_STRING = "\\b(?!thousand\\b|hundred\\b)\\w+-?\\w*";
const HUNDREDS_REGEX_STRING = `(?:\\w* hundred)?(?:\\s)?(?:(?:and )?(?:${TENS_REGEX_STRING})?)`;
const HUNDREDS_REGEX = new RegExp(`^${HUNDREDS_REGEX_STRING}$`);
const THOUSANDS_REGEX = new RegExp(
  `^(?:(${HUNDREDS_REGEX_STRING})(?: thousand)+(?:\\s)?)?(${HUNDREDS_REGEX_STRING})$`
);

function matchRegexOrThrow(str: string, rx: RegExp) {
  const result = str.match(rx);
  if (!result) {
    throw new Error("Failed to match regular expression");
  }
  return result;
}

function getTensUnitsValue(tensUnits: string) {
  const [_tensInput, primary, secondary] = matchRegexOrThrow(
    tensUnits,
    /(\w*)(?:-(\w+))?/
  );

  const nMap = new NumberMap();

  if (secondary === undefined) {
    return nMap.getOrThrow(primary);
  } else {
    return nMap.getOrThrow(primary) + nMap.getOrThrow(secondary);
  }
}

function getHundredsValue(hundreds: string) {
  const hundredsCaptureRx = `(?:(?:(\\w+)(?: hundred))?(?:\\s)?(?:and )?(${TENS_REGEX_STRING})?)`;

  const [_input, hString, tensUnits] = matchRegexOrThrow(
    hundreds,
    new RegExp(hundredsCaptureRx)
  );

  const nMap = new NumberMap();

  const hundredsValue =
    hString !== undefined ? nMap.getOrThrow(hString) * 100 : 0;

  const tensUnitsValue =
    tensUnits !== undefined ? getTensUnitsValue(tensUnits) : 0;
  return hundredsValue + tensUnitsValue;
}

function getThousandsValue(thousandsValue: string) {
  return getHundredsValue(thousandsValue) * 1000;
}

export function parseIntCopy(str: string) {
  // The only possible occurrence of "million", and reasonable to include as an edge case in this way
  if (str === "one million") {
    return 1000000;
  }

  const [_thouInput, thousands, hundreds] = matchRegexOrThrow(
    str,
    THOUSANDS_REGEX
  );

  const hundredsValue = getHundredsValue(hundreds);

  const thousandsValue = thousands ? getThousandsValue(thousands) : 0;

  return hundredsValue + thousandsValue;
}
