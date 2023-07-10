describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

 
  it( "server list should not be empty after submiting the form" , function() {
    updateServerTable();
    expect(serverTbody.innerHTML).not.toBeNull();
  });


  afterEach(function() {
    // teardown logic
    serverNameInput.value = '';
  });

  afterAll( function() {
    allServers = {};
    serverTbody.innerHTML = '';
  } );


});
