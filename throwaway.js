let hideTimer;

$(function () {
    populateSubtitle();
    switchUsername();

    const clipboard = new ClipboardJS('.copy-button');
    clipboard.on('success', (e) => {
        showSuccessNotification();
        e.clearSelection();
    });

    $('.switch-button').click(() => {
        switchUsername();
    });

    $('#throwaway').on('change', () => {
        updateUsername();
    });

    $('#separator').on('change', () => {
        updateUsername();
    });
});

function showSuccessNotification() {
    clearTimeout(hideTimer);
    $('#success-notification-container').css('display', 'flex').hide().fadeIn();
    hideTimer = setTimeout(function () { $('#success-notification-container').fadeOut(); }, 3000);
}

function populateSubtitle() {
    const taglines = [
        'For when you want a website to choose your next throwaway username for you.',
        'For when you want to <a href="https://www.youtube.com/watch?v=F1qdBPlK9M4">let the computer decide</a>.',
        'For when you\'re feeling more anonymous than decisive.',
        'For when you\'re saving your creativity for your post, not the new user registration form.',
        'For when it\'s time to use a random adjective, noun, and number as your temporary online identity.',
    ];

    const tagline = taglines[randomIntFromInterval(0, taglines.length - 1)];

    $('#subtitle').html(tagline);
}

let adjective;
let noun;
let integer;

function switchUsername() {
    const nouns = ['world','map','family','health','system','year','music','reading','method','data','food','theory','law','bird','literature','knowledge','power','ability','internet','television','science','library','nature','fact','product','idea','temperature','investment','area','society','activity','story','industry','media','thing','oven','community','definition','safety','quality','development','language','player','variety','country','movie','equipment','thought','basis','direction','strategy','technology','army','camera','freedom','paper','instance','month','truth','university','writing','article','department','difference','goal','ruby','audience','fisher','growth','income','marriage','user','combination','kangaroo','turkey','medicine','philosophy','teacher','communication','night','chemist','disk','energy','nation','road','soup','advertisement','location','success','addition','apartment','education','math','moment','painting','politics','attention','decision','event','property','shopper','student','tree','competition','distribution','entertainer','office','population','president','unit','category','context','performance','driver','flight','length','magazine','newspaper','relationship','teacher','cell','sapphire','message','phone','scene','appearance','association','concept','customer','discussion','housing','inflation','insurance','mood','advice','effort','expression','importance','opinion','payment','reality','responsibility','situation','skill','statement','wealth','application','city','county','depth','estate','foundation','grandmother','heart','perspective','photo','recipe','studio','topic','collection','depression','imagination','passion','percentage','resource','wanderer','agency','college','connection','debt','description','memory','patience','secretary','solution','administration','aspect','attitude','director','personality','psychology','recommendation','response','selection','storage','version','alcohol','argument','complaint','contract','emphasis','highway','membership','possession','preparation','steak','agreement','currency','human','engineer','interaction','mixture','preference','region','republic','tradition','actor','classroom','delivery','device','difficulty','drama','election','engine','football','guidance','hotel','owner','priority','protection','suggestion','variant','atmosphere','hero','candidate','climate','comparison','confusion','construction','elevator','emotion','guest','height','leadership','mall','operation','recording','sample','charity','editor','efficiency','excitement','extent','feedback','guitar','homework','leader','outcome','permission','presentation','promotion','reflection','refrigerator','resolution','revenue','session','tennis','basket','bonus','cabinet','coffee','dinner','drawing','hair','learner','initiative','judge','mode','mud','poetry','police','possibility','procedure','queen','ratio','relation','restaurant','signature','song','tooth','town','vehicle','volume','accident','airport','appointment','arrival','assumption','baseball','chapter','committee','conversation','database','enthusiasm','explanation','farmer','gate','hall','historian','manufacturer','meal','perception','pie','poem','presence','proposal','reception','replacement','revolution','river','speech','tea','village','winner','writer','assistance','breath','chest','chocolate','conclusion','contribution','cookie','courage','desk','drawer','grocery','insect','inspection','inspector','king','ladder','menu','penalty','piano','potato','profession','professor','quantity','reaction','requirement','salad','supermarket','weakness','ambition','analyst','apple','beer','birthday','celebration','championship','cheek','client','consequence','departure','diamond','dirt','ear','fortune','hat','indication','intention','midnight','negotiator','obligation','passenger','pizza','platform','poet','recognition','reputation','shirt','speaker','stranger','sympathy','tale','trainer','film','water','money','while','business','study','game','life','air','day','place','number','part','field','fish','back','process','heat','hand','experience','job','book','end','point','type','home','economy','value','artist','market','guide','interest','state','radio','course','company','price','size','card','list','mind','trade','line','group','word','force','key','light','training','name','school','top','amount','level','order','practice','research','sense','service','web','boss','sport','fun','house','page','term','test','answer','sound','focus','soil','board','picture','access','garden','range','rate','reason','future','site','demand','exercise','image','case','cause','coast','action','age','bad','boat','record','result','section','building','mouse','cash','class','typist','period','plan','store','tax','side','subject','space','rule','stock','weather','chance','figure','source','beginning','earth','program','chicken','design','feature','head','material','purpose','question','rock','salt','act','birth','car','dog','object','scale','sun','note','profit','rent','speed','style','bank','craft','half','standard','bus','exchange','eye','fire','position','pressure','stress','advantage','benefit','box','frame','issue','step','cycle','face','item','metal','paint','review','room','screen','structure','view','account','ball','discipline','medium','share','balance','bit','bottom','choice','gift','impact','machine','shape','tool','wind','address','career','culture','morning','pot','sign','table','task','credit','egg','hope','ice','network','north','square','effect','link','post','star','voice','capital','challenge','friend','self','brush','debate','front','function','plant','plastic','spot','summer','taste','theme','track','wing','brain','button','click','desire','foot','gas','influence','notice','rain','wall','base','distance','pair','sugar','text','animal','author','budget','discount','file','ground','lesson','minute','officer','phase','reference','register','sky','stage','stick','title','trouble','bowl','bridge','campaign','character','club','edge','fan','letter','lock','maximum','novel','option','pack','park','plenty','quarter','background','dish','factor','glass','vegetable','calendar','coat','cup','door','hook','cake','holiday','horse','mountain','golfer','chair','sandwich','bottle','candle','flower','bug','cat','wish','bear','cow','individual'];
    const adjectives = ['intelligent','nice','pleasant','tempered','dizzy','distracted','discreet','cheeky','cheerful','energetic','untidy','optimistic','talkative','calm','passionate','proud','sincere','lively','funny','silly','shy','determined','versatile','sociable','worried','thoughtful','humble','friendly','obedient','honest','fearless','generous','compassionate','warmhearted','straightforward','imaginative','placid','helpful','enthusiastic','persistent','sensible','rational','reserved','disciplined','plucky','patient','easygoing','messy','creative','working','faithful','kind','courageous','loyal','modest','tidy','confident','attentive','reliable','conscientious','careful','gentle','neat','dynamic','impartial','supportive','intellectual','brave','ambitious','polite','happy','diplomatic','courteous','humorous','popular','smart','serious','adventurous','happy','amused','confident','cold','surprised','curious','indifferent','determined','bashful','interested','nosy','hopeful','regretful','stubborn','proud','ecstatic','thoughtful','optimistic','relieved','puzzled','joyful','sleepy','excited','skeptical'];

    adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    noun = nouns[Math.floor(Math.random() * nouns.length)];
    integer = randomIntFromInterval(10, 99);

    updateUsername();
}

function updateUsername() {
    words = [adjective, noun, integer];

    const throwaway = $('#throwaway').val();
    if (throwaway === 'prefix') {
        words.unshift('throwaway');
    }
    else if (throwaway === 'suffix') {
        words.push('throwaway');
    }

    let username;
    const separator = $('#separator').val();
    if (separator === '') {
        username = camelCaseWord(words);
    }
    else {
        username = separatedCaseWord(words, separator);
    }
    
    $('#username').html(username);
    $('.copy-button').attr('data-clipboard-text', username);
    $('#success-notification').html(`✅ <span class='success-notification-name'>${username}</span> copied!`);
}

function camelCaseWord(words) {
    let camelCaseWord = '';
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (i > 0) {
            word = capitalizeFirstLetter(word);
        }
        camelCaseWord += word;
    }
    return camelCaseWord;
}

function separatedCaseWord(words, separator) {
    let separatedCaseWord = '';
    for (let i = 0; i < words.length; i++) {
        separatedCaseWord += words[i];
        if (i < words.length - 1) {
            separatedCaseWord += separator;
        }
    }
    return separatedCaseWord;
}

function capitalizeFirstLetter(string) {
    if (typeof string !== 'string') {
        return string;
    }

    return string.charAt(0).toUpperCase() + string.slice(1);
}

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}