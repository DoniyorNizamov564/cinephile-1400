import{r as S,b as $,o,d as g,w as k,e as p,f as c,u as x,i as L,t as B,s as C,v as P,j as d,q as V,h as m,c as u,x as D,F as U,k as b,l as H,a as N}from"./index-09915be5.js";const T={alt:"",class:"search__img"},j={class:"search__name"},q={__name:"SearchItem",props:["item"],setup(t){return(a,n)=>{const e=S("router-link"),s=$("lazy");return o(),g(e,{to:`/${t.item.media_type}/${t.item.id}`,class:"search__item"},{default:k(()=>[p(c("img",T,null,512),[[s,x(L)+t.item.poster_path]]),c("h3",j,B(t.item.title||t.item.name),1)]),_:1},8,["to"])}}},z=C("search",{state:()=>({searchList:[],search:"",totalPages:1}),actions:{async getSearch(t=1){try{const n=await(await fetch(`https://api.themoviedb.org/3/search/multi?query=${this.search}&include_adult=false&language=en-US&page=${t}`,P)).json();this.totalPages=n.total_pages;let e=n.results.filter(s=>s.media_type=="movie"||s.media_type=="tv");t>1?this.searchList.push(...e):this.searchList=e}catch(a){console.log(a)}}}}),E={class:"search container"},F={class:"search__wrapper"},A={key:0,class:"loading"},I=c("div",{class:"loading__spiner"},null,-1),M=[I],Y={__name:"SearchContent",setup(t){let a=null;function n(r,l){clearTimeout(a),a=setTimeout(()=>{r()},l)}const e=z(),s=d({get:()=>e.search,set:r=>{e.search=r,n(e.getSearch,500)}}),v=d(()=>e.searchList);V(()=>{e.search="",e.searchList=[]});const h=m(1),i=m(!1),f=d(()=>e.totalPages);async function y(){!i.value&&h.value<f.value&&(i.value=!0,h.value++,await e.getSearch(h.value),i.value=!1)}return window.addEventListener("scroll",()=>{window.scrollY+window.innerHeight>=document.body.clientHeight-footer.clientHeight&&y()}),(r,l)=>(o(),u("section",E,[p(c("input",{"onUpdate:modelValue":l[0]||(l[0]=_=>s.value=_),type:"text",class:"search__input",placeholder:"Найти фильм, сериал..."},null,512),[[D,s.value]]),c("div",F,[(o(!0),u(U,null,b(v.value,(_,w)=>(o(),g(q,{item:_,key:w},null,8,["item"]))),128))]),i.value?(o(),u("div",A,M)):H("",!0)]))}},G={class:"main"},K={__name:"Search",setup(t){return(a,n)=>(o(),u("main",G,[N(Y)]))}};export{K as default};
