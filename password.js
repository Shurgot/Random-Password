function getRandom(max){
    return Math.floor(Math.random() * max) // random number func
}
var K = 10 // length of password
var passValue = "A,a,B,b,C,c,D,d,E,e,F,f,G,g,H,h,I,i,J,j,K,k,L,l,M,m,N,n,O,o,P,p,Q,q,R,r,S,s,T,t,U,u,V,v,W,w,X,x,Y,y,Z,z,1,2,3,4,5,6,7,8,9"// database of symbols for password
var passValueSp = passValue.split(",")
var passResult = []
var passFinal = ""
for(let i = 0; i < K; i++){
    passResult.push(getRandom(passValueSp.length)) // choose random index from value, and put them to empty array passResult
    var pass = passValueSp[passResult[i]] // take index and convert it to symbols from value
    passFinal += pass
}

console.log(passFinal);