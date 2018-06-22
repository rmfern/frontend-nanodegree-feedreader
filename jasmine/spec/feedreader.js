/* feedreader.js*/

$(function() {

    describe('RSS Feeds', function() {
         //making sure allFeeds isn't empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         //checking for urls for each feed
         it('have url', function() {
           allFeeds.forEach(function(feed){
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(0);
             expect(feed.url.indexOf('http' || 'https') !== -1).toBe(true);
           });
         });

         //making sure each feed has a name
         it('have name', function(){
           allFeeds.forEach(function(feed){
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(0);
           });
         });
    });

    describe('The Menu', function() {

        //Checking if the menu is hidden initially
       it('menu is hidden', function() {
         expect($('body').hasClass('menu-hidden')).toBe(true);
       });


        // Test to make sure menu hides and displays correctly when clicked
        it('menu displays and hides correctly', function() {
          $('.menu-icon-link').click();
          expect($('body').hasClass('menu-hidden')).toBe(false);

          $('.menu-icon-link').click();
          expect($('body').hasClass('menu-hidden')).toBe(true);

        });


    });


    //Test to make sure feed elements are loading
    describe('Initial Entries', function() {
         beforeEach(function(done) {
           loadFeed(0, done);
         });

         it('get initial feed elements', function() {
           expect($('.feed').children().length).toBeGreaterThan(0);
         })


    });

    //Test to ensure new content is loading with new feed
    describe('New Feed Selection', function() {
      let oldContent;
      let newContent;
      beforeEach(function(done) {

        loadFeed(0, function(){
          oldContent = $('header-title').html();
          loadFeed(1, function() {
            //newContent = $('header-title').html();
            done();
          })
        });
      });

      it('should check for new content', function() {
        expect(oldContent == $('.header-title').html()).toBe(false);
      });
    });


}());
