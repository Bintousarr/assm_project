import{ba as j}from"./chunk-PZVZLHCQ.js";function u(t){let e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof e=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function f(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}var dt=Math.pow(10,8)*24*60*60*1e3,ve=-dt,O=6048e5,E=864e5;var ft=3600;var I=ft*24,De=I*7,lt=I*365.2425,ht=lt/12,Pe=ht*3;var pt={};function b(){return pt}function p(t,e){let n=b(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=u(t),o=a.getDay(),s=(o<r?7:0)+o-r;return a.setDate(a.getDate()-s),a.setHours(0,0,0,0),a}function M(t){return p(t,{weekStartsOn:1})}function W(t){let e=u(t),n=e.getFullYear(),r=f(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);let a=M(r),o=f(t,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);let s=M(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=s.getTime()?n:n-1}function S(t){let e=u(t);return e.setHours(0,0,0,0),e}function T(t){let e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function q(t,e){let n=S(t),r=S(e),a=n.getTime()-T(n),o=r.getTime()-T(r);return Math.round((a-o)/E)}function N(t){let e=W(t),n=f(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),M(n)}function H(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function L(t){if(!H(t)&&typeof t!="number")return!1;let e=u(t);return!isNaN(Number(e))}function J(t){let e=u(t),n=f(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}var gt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},X=(t,e,n)=>{let r,a=gt[t];return typeof a=="string"?r=a:e===1?r=a.one:r=a.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function x(t){return(e={})=>{let n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var wt={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},yt={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},bt={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Q={date:x({formats:wt,defaultWidth:"full"}),time:x({formats:yt,defaultWidth:"full"}),dateTime:x({formats:bt,defaultWidth:"full"})};var xt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},_=(t,e,n,r)=>xt[t];function l(t){return(e,n)=>{let r=n?.context?String(n.context):"standalone",a;if(r==="formatting"&&t.formattingValues){let s=t.defaultFormattingWidth||t.defaultWidth,c=n?.width?String(n.width):s;a=t.formattingValues[c]||t.formattingValues[s]}else{let s=t.defaultWidth,c=n?.width?String(n.width):t.defaultWidth;a=t.values[c]||t.values[s]}let o=t.argumentCallback?t.argumentCallback(e):e;return a[o]}}var Mt={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},vt={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Dt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Pt={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Ot={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Wt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},kt=(t,e)=>{let n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},R={ordinalNumber:kt,era:l({values:Mt,defaultWidth:"wide"}),quarter:l({values:vt,defaultWidth:"wide",argumentCallback:t=>t-1}),month:l({values:Dt,defaultWidth:"wide"}),day:l({values:Pt,defaultWidth:"wide"}),dayPeriod:l({values:Ot,defaultWidth:"wide",formattingValues:Wt,defaultFormattingWidth:"wide"})};function h(t){return(e,n={})=>{let r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;let s=o[0],c=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],w=Array.isArray(c)?St(c,d=>d.test(s)):Yt(c,d=>d.test(s)),y;y=t.valueCallback?t.valueCallback(w):w,y=n.valueCallback?n.valueCallback(y):y;let m=e.slice(s.length);return{value:y,rest:m}}}function Yt(t,e){for(let n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function St(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function k(t){return(e,n={})=>{let r=e.match(t.matchPattern);if(!r)return null;let a=r[0],o=e.match(t.parsePattern);if(!o)return null;let s=t.valueCallback?t.valueCallback(o[0]):o[0];s=n.valueCallback?n.valueCallback(s):s;let c=e.slice(a.length);return{value:s,rest:c}}}var Tt=/^(\d+)(th|st|nd|rd)?/i,Ft=/\d+/i,Ct={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},jt={any:[/^b/i,/^(a|c)/i]},Et={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},It={any:[/1/i,/2/i,/3/i,/4/i]},qt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Nt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ht={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Lt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Jt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Xt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},A={ordinalNumber:k({matchPattern:Tt,parsePattern:Ft,valueCallback:t=>parseInt(t,10)}),era:h({matchPatterns:Ct,defaultMatchWidth:"wide",parsePatterns:jt,defaultParseWidth:"any"}),quarter:h({matchPatterns:Et,defaultMatchWidth:"wide",parsePatterns:It,defaultParseWidth:"any",valueCallback:t=>t+1}),month:h({matchPatterns:qt,defaultMatchWidth:"wide",parsePatterns:Nt,defaultParseWidth:"any"}),day:h({matchPatterns:Ht,defaultMatchWidth:"wide",parsePatterns:Lt,defaultParseWidth:"any"}),dayPeriod:h({matchPatterns:Jt,defaultMatchWidth:"any",parsePatterns:Xt,defaultParseWidth:"any"})};var F={code:"en-US",formatDistance:X,formatLong:Q,formatRelative:_,localize:R,match:A,options:{weekStartsOn:0,firstWeekContainsDate:1}};function V(t){let e=u(t);return q(e,J(e))+1}function G(t){let e=u(t),n=M(e).getTime()-N(e).getTime();return Math.round(n/O)+1}function Y(t,e){let n=u(t),r=n.getFullYear(),a=b(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,s=f(t,0);s.setFullYear(r+1,0,o),s.setHours(0,0,0,0);let c=p(s,e),w=f(t,0);w.setFullYear(r,0,o),w.setHours(0,0,0,0);let y=p(w,e);return n.getTime()>=c.getTime()?r+1:n.getTime()>=y.getTime()?r:r-1}function B(t,e){let n=b(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=Y(t,e),o=f(t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),p(o,e)}function z(t,e){let n=u(t),r=p(n,e).getTime()-B(n,e).getTime();return Math.round(r/O)+1}function i(t,e){let n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}var g={y(t,e){let n=t.getFullYear(),r=n>0?n:1-n;return i(e==="yy"?r%100:r,e.length)},M(t,e){let n=t.getMonth();return e==="M"?String(n+1):i(n+1,2)},d(t,e){return i(t.getDate(),e.length)},a(t,e){let n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return i(t.getHours()%12||12,e.length)},H(t,e){return i(t.getHours(),e.length)},m(t,e){return i(t.getMinutes(),e.length)},s(t,e){return i(t.getSeconds(),e.length)},S(t,e){let n=e.length,r=t.getMilliseconds(),a=Math.floor(r*Math.pow(10,n-3));return i(a,e.length)}};var D={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Z={G:function(t,e,n){let r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){let r=t.getFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return g.y(t,e)},Y:function(t,e,n,r){let a=Y(t,r),o=a>0?a:1-a;if(e==="YY"){let s=o%100;return i(s,2)}return e==="Yo"?n.ordinalNumber(o,{unit:"year"}):i(o,e.length)},R:function(t,e){let n=W(t);return i(n,e.length)},u:function(t,e){let n=t.getFullYear();return i(n,e.length)},Q:function(t,e,n){let r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return i(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){let r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return i(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){let r=t.getMonth();switch(e){case"M":case"MM":return g.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){let r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return i(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){let a=z(t,r);return e==="wo"?n.ordinalNumber(a,{unit:"week"}):i(a,e.length)},I:function(t,e,n){let r=G(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):i(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):g.d(t,e)},D:function(t,e,n){let r=V(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):i(r,e.length)},E:function(t,e,n){let r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){let a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return i(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){let a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return i(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){let r=t.getDay(),a=r===0?7:r;switch(e){case"i":return String(a);case"ii":return i(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){let a=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){let r=t.getHours(),a;switch(r===12?a=D.noon:r===0?a=D.midnight:a=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){let r=t.getHours(),a;switch(r>=17?a=D.evening:r>=12?a=D.afternoon:r>=4?a=D.morning:a=D.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return g.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):g.H(t,e)},K:function(t,e,n){let r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):i(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):i(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):g.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):g.s(t,e)},S:function(t,e){return g.S(t,e)},X:function(t,e,n,r){let o=(r._originalDate||t).getTimezoneOffset();if(o===0)return"Z";switch(e){case"X":return $(o);case"XXXX":case"XX":return v(o);case"XXXXX":case"XXX":default:return v(o,":")}},x:function(t,e,n,r){let o=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return $(o);case"xxxx":case"xx":return v(o);case"xxxxx":case"xxx":default:return v(o,":")}},O:function(t,e,n,r){let o=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+U(o,":");case"OOOO":default:return"GMT"+v(o,":")}},z:function(t,e,n,r){let o=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+U(o,":");case"zzzz":default:return"GMT"+v(o,":")}},t:function(t,e,n,r){let a=r._originalDate||t,o=Math.floor(a.getTime()/1e3);return i(o,e.length)},T:function(t,e,n,r){let o=(r._originalDate||t).getTime();return i(o,e.length)}};function U(t,e=""){let n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;return o===0?n+String(a):n+String(a)+e+i(o,2)}function $(t,e){return t%60===0?(t>0?"-":"+")+i(Math.abs(t)/60,2):v(t,e)}function v(t,e=""){let n=t>0?"-":"+",r=Math.abs(t),a=i(Math.floor(r/60),2),o=i(r%60,2);return n+a+e+o}var K=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},tt=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Qt=(t,e)=>{let n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return K(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",K(r,e)).replace("{{time}}",tt(a,e))},et={p:tt,P:Qt};var _t=["D","DD"],Rt=["YY","YYYY"];function nt(t){return _t.indexOf(t)!==-1}function rt(t){return Rt.indexOf(t)!==-1}function C(t,e,n){if(t==="YYYY")throw new RangeError(`Use \`yyyy\` instead of \`YYYY\` (in \`${e}\`) for formatting years to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`);if(t==="YY")throw new RangeError(`Use \`yy\` instead of \`YY\` (in \`${e}\`) for formatting years to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`);if(t==="D")throw new RangeError(`Use \`d\` instead of \`D\` (in \`${e}\`) for formatting days of the month to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`);if(t==="DD")throw new RangeError(`Use \`dd\` instead of \`DD\` (in \`${e}\`) for formatting days of the month to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`)}var At=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Vt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Gt=/^'([^]*?)'?$/,Bt=/''/g,zt=/[a-zA-Z]/;function at(t,e,n){let r=b(),a=n?.locale??r.locale??F,o=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,s=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,c=u(t);if(!L(c))throw new RangeError("Invalid time value");let w={firstWeekContainsDate:o,weekStartsOn:s,locale:a,_originalDate:c};return e.match(Vt).map(function(m){let d=m[0];if(d==="p"||d==="P"){let P=et[d];return P(m,a.formatLong)}return m}).join("").match(At).map(function(m){if(m==="''")return"'";let d=m[0];if(d==="'")return Ut(m);let P=Z[d];if(P)return!n?.useAdditionalWeekYearTokens&&rt(m)&&C(m,e,String(t)),!n?.useAdditionalDayOfYearTokens&&nt(m)&&C(m,e,String(t)),P(c,m,a.localize,w);if(d.match(zt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+d+"`");return m}).join("")}function Ut(t){let e=t.match(Gt);return e?e[1].replace(Bt,"'"):t}var $t={lessThanXSeconds:{one:"moins d\u2019une seconde",other:"moins de {{count}} secondes"},xSeconds:{one:"1 seconde",other:"{{count}} secondes"},halfAMinute:"30 secondes",lessThanXMinutes:{one:"moins d\u2019une minute",other:"moins de {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"environ 1 heure",other:"environ {{count}} heures"},xHours:{one:"1 heure",other:"{{count}} heures"},xDays:{one:"1 jour",other:"{{count}} jours"},aboutXWeeks:{one:"environ 1 semaine",other:"environ {{count}} semaines"},xWeeks:{one:"1 semaine",other:"{{count}} semaines"},aboutXMonths:{one:"environ 1 mois",other:"environ {{count}} mois"},xMonths:{one:"1 mois",other:"{{count}} mois"},aboutXYears:{one:"environ 1 an",other:"environ {{count}} ans"},xYears:{one:"1 an",other:"{{count}} ans"},overXYears:{one:"plus d\u2019un an",other:"plus de {{count}} ans"},almostXYears:{one:"presqu\u2019un an",other:"presque {{count}} ans"}},ot=(t,e,n)=>{let r,a=$t[t];return typeof a=="string"?r=a:e===1?r=a.one:r=a.other.replace("{{count}}",String(e)),n?.addSuffix?n.comparison&&n.comparison>0?"dans "+r:"il y a "+r:r};var Zt={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd/MM/y"},Kt={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},te={full:"{{date}} '\xE0' {{time}}",long:"{{date}} '\xE0' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},it={date:x({formats:Zt,defaultWidth:"full"}),time:x({formats:Kt,defaultWidth:"full"}),dateTime:x({formats:te,defaultWidth:"full"})};var ee={lastWeek:"eeee 'dernier \xE0' p",yesterday:"'hier \xE0' p",today:"'aujourd\u2019hui \xE0' p",tomorrow:"'demain \xE0' p'",nextWeek:"eeee 'prochain \xE0' p",other:"P"},st=(t,e,n,r)=>ee[t];var ne={narrow:["av. J.-C","ap. J.-C"],abbreviated:["av. J.-C","ap. J.-C"],wide:["avant J\xE9sus-Christ","apr\xE8s J\xE9sus-Christ"]},re={narrow:["T1","T2","T3","T4"],abbreviated:["1er trim.","2\xE8me trim.","3\xE8me trim.","4\xE8me trim."],wide:["1er trimestre","2\xE8me trimestre","3\xE8me trimestre","4\xE8me trimestre"]},ae={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","f\xE9vr.","mars","avr.","mai","juin","juil.","ao\xFBt","sept.","oct.","nov.","d\xE9c."],wide:["janvier","f\xE9vrier","mars","avril","mai","juin","juillet","ao\xFBt","septembre","octobre","novembre","d\xE9cembre"]},oe={narrow:["D","L","M","M","J","V","S"],short:["di","lu","ma","me","je","ve","sa"],abbreviated:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],wide:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]},ie={narrow:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"mat.",afternoon:"ap.m.",evening:"soir",night:"mat."},abbreviated:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"matin",afternoon:"apr\xE8s-midi",evening:"soir",night:"matin"},wide:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"du matin",afternoon:"de l\u2019apr\xE8s-midi",evening:"du soir",night:"du matin"}},se=(t,e)=>{let n=Number(t),r=e?.unit;if(n===0)return"0";let a=["year","week","hour","minute","second"],o;return n===1?o=r&&a.includes(r)?"\xE8re":"er":o="\xE8me",n+o},ut={ordinalNumber:se,era:l({values:ne,defaultWidth:"wide"}),quarter:l({values:re,defaultWidth:"wide",argumentCallback:t=>t-1}),month:l({values:ae,defaultWidth:"wide"}),day:l({values:oe,defaultWidth:"wide"}),dayPeriod:l({values:ie,defaultWidth:"wide"})};var ue=/^(\d+)(ième|ère|ème|er|e)?/i,ce=/\d+/i,me={narrow:/^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,abbreviated:/^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,wide:/^(avant Jésus-Christ|après Jésus-Christ)/i},de={any:[/^av/i,/^ap/i]},fe={narrow:/^T?[1234]/i,abbreviated:/^[1234](er|ème|e)? trim\.?/i,wide:/^[1234](er|ème|e)? trimestre/i},le={any:[/1/i,/2/i,/3/i,/4/i]},he={narrow:/^[jfmasond]/i,abbreviated:/^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,wide:/^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i},pe={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^av/i,/^ma/i,/^juin/i,/^juil/i,/^ao/i,/^s/i,/^o/i,/^n/i,/^d/i]},ge={narrow:/^[lmjvsd]/i,short:/^(di|lu|ma|me|je|ve|sa)/i,abbreviated:/^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,wide:/^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i},we={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^di/i,/^lu/i,/^ma/i,/^me/i,/^je/i,/^ve/i,/^sa/i]},ye={narrow:/^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,any:/^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i},be={any:{am:/^a/i,pm:/^p/i,midnight:/^min/i,noon:/^mid/i,morning:/mat/i,afternoon:/ap/i,evening:/soir/i,night:/nuit/i}},ct={ordinalNumber:k({matchPattern:ue,parsePattern:ce,valueCallback:t=>parseInt(t)}),era:h({matchPatterns:me,defaultMatchWidth:"wide",parsePatterns:de,defaultParseWidth:"any"}),quarter:h({matchPatterns:fe,defaultMatchWidth:"wide",parsePatterns:le,defaultParseWidth:"any",valueCallback:t=>t+1}),month:h({matchPatterns:he,defaultMatchWidth:"wide",parsePatterns:pe,defaultParseWidth:"any"}),day:h({matchPatterns:ge,defaultMatchWidth:"wide",parsePatterns:we,defaultParseWidth:"any"}),dayPeriod:h({matchPatterns:ye,defaultMatchWidth:"any",parsePatterns:be,defaultParseWidth:"any"})};var mt={code:"fr",formatDistance:ot,formatLong:it,formatRelative:st,localize:ut,match:ct,options:{weekStartsOn:1,firstWeekContainsDate:4}};var Fr=(()=>{let e=class e{transform(r){let a=new Date(r);return at(a,"dd MMMM yyyy",{locale:mt})}};e.\u0275fac=function(a){return new(a||e)},e.\u0275pipe=j({name:"dateFormat",type:e,pure:!0,standalone:!0});let t=e;return t})();export{Fr as a};
