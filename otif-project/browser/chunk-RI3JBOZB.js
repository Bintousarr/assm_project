import{b as T,d as V,g as D,u as O}from"./chunk-WUVU5367.js";import{i as M,j as I,m as k}from"./chunk-XNJB6KBV.js";import{$a as e,Ea as d,Va as u,Xa as p,_ as E,ab as t,bb as a,eb as _,ia as x,ib as f,ja as g,jb as s,ka as b,la as v,qb as i,rb as h,sb as S,vb as y,wb as w,xb as F,zb as C}from"./chunk-PZVZLHCQ.js";import"./chunk-ODN5LVDJ.js";function j(n,r){if(n&1&&(e(0,"div",26),i(1),a(2,"br"),e(3,"span",36),i(4),t()()),n&2){let l=r.$implicit;d(),S(" ",l.name,""),d(3),h(l.date)}}function z(n,r){if(n&1){let l=_();e(0,"button",41),f("click",function(){x(l);let o=s().$implicit,m=s(2);return g(m.openModal(o))}),i(1),t()}if(n&2){let l=s().$implicit;d(),h(l)}}function R(n,r){n&1&&(e(0,"div",42),i(1,"\u2014"),t())}function N(n,r){if(n&1&&(e(0,"div",38),u(1,z,2,1,"button",39)(2,R,2,0,"div",40),t()),n&2){let l=r.$implicit;d(),p("ngIf",l!=="\u2014"),d(),p("ngIf",l==="\u2014")}}function A(n,r){if(n&1&&(e(0,"div"),u(1,N,3,2,"div",37),t()),n&2){let l=r.$implicit;d(),p("ngForOf",l)}}function B(n,r){if(n&1){let l=_();e(0,"div",43)(1,"div",44)(2,"h2",45),i(3,"Renseignez le motif"),t(),e(4,"textarea",46),F("ngModelChange",function(o){x(l);let m=s();return w(m.motif,o)||(m.motif=o),g(o)}),t(),e(5,"div",47)(6,"button",48),f("click",function(){x(l);let o=s();return g(o.submitMotif())}),i(7,"Valider"),t(),e(8,"button",49),f("click",function(){x(l);let o=s();return g(o.closeModal())}),i(9,"Annuler"),t()()()()}if(n&2){let l=s();d(4),y("ngModel",l.motif)}}var $=(()=>{let r=class r{constructor(){this.isModalOpen=!1,this.selectedTime=null,this.motif="",this.days=[{name:"Lundi",date:"02 D\xE9c."},{name:"Mardi",date:"03 D\xE9c."},{name:"Mercredi",date:"04 D\xE9c."},{name:"Jeudi",date:"05 D\xE9c."},{name:"Vendredi",date:"06 D\xE9c."}],this.timeSlots=[["15:30","16:00"],["10:30","12:00","13:45"],["09:30","11:00","14:00"],["10:30","11:00","12:15"],["\u2014","\u2014"]]}openModal(c){this.selectedTime=c,this.isModalOpen=!0}closeModal(){this.isModalOpen=!1,this.motif="",this.selectedTime=null}submitMotif(){console.log("Motif pour",this.selectedTime,":",this.motif),this.closeModal()}};r.\u0275fac=function(o){return new(o||r)},r.\u0275cmp=E({type:r,selectors:[["app-fabrice"]],standalone:!0,features:[C],decls:72,vars:3,consts:[[1,"bg-red-900","font-poppins","p-8"],[1,"flex","ml-20","items-center","space-x-6","font-poppins"],["src","../../../assets/fabrice.jpeg",1,"w-60","h-60","rounded-full","object-cover"],[1,"text-white","text-4xl","font-bold"],[1,"text-white","text-lg"],[1,"p-8","text-justify","ml-20","font-poppins"],[1,"flex","items-center"],[1,"text-gray-700","text-lg"],[1,"py-6","ml-40"],["src","../../../../assets/logo.png","alt",""],[1,"my-2","border-gray-300","mt-10"],[1,"text-xl","font-bold","mb-4","font-poppins"],[1,"flex","items-center","space-x-8"],[1,"w-full","max-w-7xl","mt-4","bg-white","shadow-lg","rounded-lg","overflow-hidden"],[1,"bg-customBlue","text-white","px-6","py-3","flex","items-center"],["fill","none","stroke","currentColor","viewBox","0 0 24 24","xmlns","http://www.w3.org/2000/svg",1,"w-8","h-8","mr-2"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M8 7V3m8 4V3m-4 14v4m-4-8h8M3 8v12a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2z"],[1,"text-xl","font-semibold"],[1,"ml-auto","text-lg"],[1,"px-6","py-4"],[1,"block","text-xl","font-bold","mb-2"],[1,"text-black","text-xl"],[1,"max-w-full","mx-auto","bg-gray-100","mt-10","p-4","shadow-lg","rounded-lg"],[1,"flex","items-center","p-4"],["src","../../../../../assets/fabrice.jpeg","alt","Krys Logo",1,"w-12","h-12","mr-4"],[1,"text-lg","font-semibold","text-blue-700"],[1,"text-gray-500"],[1,"fas","fa-map-marker-alt"],[1,"px-4","pb-4"],[1,"w-full","bg-blue-500","text-white","py-3","text-lg","rounded","hover:bg-blue-700"],[1,"px-4","pb-4","border-t"],[1,"grid","grid-cols-6","gap-4","text-center"],["class","text-gray-500",4,"ngFor","ngForOf"],[1,"grid","grid-cols-6","gap-4","text-center","mt-2"],[4,"ngFor","ngForOf"],["class","fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50",4,"ngIf"],[1,"font-semibold"],["class","mt-2",4,"ngFor","ngForOf"],[1,"mt-2"],["class","bg-blue-100 text-blue-700 py-2 px-4 text-lg rounded hover:bg-blue-300",3,"click",4,"ngIf"],["class","text-gray-400 py-2 mt-1 text-lg",4,"ngIf"],[1,"bg-blue-100","text-blue-700","py-2","px-4","text-lg","rounded","hover:bg-blue-300",3,"click"],[1,"text-gray-400","py-2","mt-1","text-lg"],[1,"fixed","inset-0","flex","items-center","justify-center","z-50","bg-black","bg-opacity-50"],[1,"bg-white","p-8","rounded-lg","shadow-lg","w-96","relative","z-10"],[1,"text-xl","font-semibold","mb-4"],["rows","4","placeholder","Entrez votre motif ici...",1,"w-full","p-3","border","border-gray-300","rounded-md","mb-4","text-lg",3,"ngModelChange","ngModel"],[1,"flex","justify-end","space-x-4"],[1,"bg-blue-500","text-white","px-6","py-3","rounded-md","text-lg","hover:bg-blue-600",3,"click"],[1,"bg-red-500","text-white","px-6","py-3","rounded-md","text-lg","hover:bg-red-600",3,"click"]],template:function(o,m){o&1&&(e(0,"div",0)(1,"div",1),a(2,"img",2),e(3,"div")(4,"h1",3),i(5,"IRIE BI FABRICE"),t(),e(6,"p",4),i(7,"OTIF Space Africa"),t()()()(),e(8,"div",5)(9,"div",6)(10,"p",7),i(11," Ing\xE9nieur en g\xE9od\xE9sie doubl\xE9 d'un master en Syst\xE8me d\u2019information g\xE9ographique de l'Universit\xE9 de "),a(12,"br"),i(13," Caen en France. Il est un expert international en SIG. Durant la dizaine d\u2019ann\xE9es o\xF9 il a travaill\xE9 "),a(14,"br"),i(15,"chez ESRI France, il est intervenu sur les projets pour de grands comptes : Total, Grdf, Edf, Sncf etc... "),a(16,"br"),i(17," Il est le fondateur du groupe Modelis constitu\xE9 de sept entreprises dans quatre pays : la C\xF4te d\u2019ivoire, "),a(18,"br"),i(19," la France, le S\xE9n\xE9gal et le Mali. "),t(),e(20,"div",8),a(21,"img",9),t()(),a(22,"hr",10),e(23,"h2",11),i(24,"Jour d'intervention"),t(),e(25,"div",12)(26,"div",13)(27,"div",14)(28,"div"),b(),e(29,"svg",15),a(30,"path",16),t(),v(),e(31,"h3",17),i(32,"Jour 2 "),t(),e(33,"p",18),i(34,"03, D\xE9c-2024"),t()()(),e(35,"div",19)(36,"span",20),i(37,"10:00 - 12:00"),t(),e(38,"span",21),i(39,"Discours"),t()()(),e(40,"div",13)(41,"div",14)(42,"div"),b(),e(43,"svg",15),a(44,"path",16),t(),v(),e(45,"h3",17),i(46,"Jour 5 "),t(),e(47,"p",18),i(48,"05, D\xE9c-2024"),t()()(),e(49,"div",19)(50,"span",20),i(51,"10:00 - 12:00"),t(),e(52,"span",21),i(53,"Discours"),t()()()(),e(54,"div",22)(55,"div",23),a(56,"img",24),e(57,"div")(58,"h2",25),i(59,"Entretien avec Mr Fabrice"),t(),e(60,"p",26),a(61,"i",27),i(62," Abidjan, C\xF4te d'Ivoire"),t()()(),e(63,"div",28)(64,"button",29),i(65,"PRENDRE RENDEZ-VOUS"),t()(),e(66,"div",30)(67,"div",31),u(68,j,5,2,"div",32),t(),e(69,"div",33),u(70,A,2,1,"div",34),t()()(),u(71,B,10,1,"div",35),t()),o&2&&(d(68),p("ngForOf",m.days),d(2),p("ngForOf",m.timeSlots),d(),p("ngIf",m.isModalOpen))},dependencies:[k,M,I,O,T,V,D]});let n=r;return n})();export{$ as FabriceComponent};
