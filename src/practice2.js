const inject = (items,sections)=>{
   let output = [...items];
    for(let i=0;i<sections.length;i++){
        output.slice(sections[i].index+i,0,sections.content)
    }
    return output;
}
export { inject };
