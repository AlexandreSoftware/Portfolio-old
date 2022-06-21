/*let reqmock = mock<Request>();
  let resmock = mock<Response>(); 
  let req = instance(reqmock)
  let res = instance(resmock);  
  when(reqmock.params).thenReturn({page:"0"});*/


  /*it("should return a error since an id was not provided",(done)=>{
    let reqmock = mock<Request>();
    let resmock = mock<Response>(); 
    let req = instance(reqmock)
    let res = instance(resmock); 
    chai.expect(GetBlog(req,res))
    .to.be.rejectedWith("ERROR: An ID was not provided")
     .and.eventually.be.an.instanceOf(Error).notify(done)

            it("should show page 0 since a page was not provided",async ()=>{

            let blogs = await GetAllBlogs(0)
            chai.expect(blogs)
                .to.be.eql(mockData.slice(0,50))
        })
                it("should throw an error as the id was not provided",async (done)=>{
            let reqmock = mock<Request>();
            let resmock = mock<Response>(); 
            let req = instance(reqmock);
            let res = instance(resmock);
            chai.expect(PostBlog(req,res))
            .to.be.rejectedWith("ERROR: An ID was not provided")
             .and.eventually.be.an.instanceOf(Error).notify(done)
            
        })
                it("should return false as the id provided doesnt exist",async ()=>{
            let reqmock = mock<Request>();
            let resmock = mock<Response>(); 
            let req = instance(reqmock);
            when(reqmock.body).thenReturn(
                {
                    id:"40000" ,
                    Title: " A cool title"
                });
            let res = instance(resmock);
            let blogs = await PostBlog(req,res)
            chai.expect(blogs)
            .to.be.false
            
        })
                    let reqmock = mock<Request>();
            let resmock = mock<Response>(); 
            let req = instance(reqmock);
            when(reqmock.body).thenReturn(
                {
                    id:`${objectid}` ,
                    Title: " A cool title"
                });
            let res = instance(resmock);
                    it("should return a error since an id was not provided",(done)=>{
            let reqmock = mock<Request>();
            let resmock = mock<Response>(); 
            let req = instance(reqmock)
            let res = instance(resmock); 
            chai.expect(GetBlog(req,res))
            .to.be.rejectedWith("ERROR: An ID was not provided")
             .and.eventually.be.an.instanceOf(Error).notify(done)

        })
                it("should throw an error as the id was not provided",async (done)=>{
            let reqmock = mock<Request>();
            let resmock = mock<Response>(); 
            let req = instance(reqmock);
            let res = instance(resmock);
            chai.expect(PostBlog(req,res))
            .to.be.rejectedWith("ERROR: An ID was not provided")
             .and.eventually.be.an.instanceOf(Error).notify(done)
            
        })
                it("should throw an error as the id was not provided",async (done)=>{
            let reqmock = mock<Request>();
            let resmock = mock<Response>(); 
            let req = instance(reqmock);
            let res = instance(resmock);
            chai.expect(PostBlog(req,res))
            .to.be.rejectedWith("ERROR: An ID was not provided")
             .and.eventually.be.an.instanceOf(Error).notify(done)
            
        })
})*/