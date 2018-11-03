document.body.addEventListener('modsLoaded', function() {
	cc.sc.Model.addObserver(sc.map, {
	  [entries.ModelCallBackFunction] : function(obj, eventType) {
		if(eventType === 3) {
			simplify.getParams(cc.ig.playerInstance())[entries.baseParams].hp = 1;
			simplify.setCurrentHp(cc.ig.playerInstance(), 1);
			
			Object.defineProperty(cc.ig.playerInstance(), entries.fallDmgFactor, {
				value : 1,
				writable : false
			});
			Object.defineProperty(cc.ig.playerInstance()[entries.param], entries.damageFactor, {
				value : 1,
				writable : false
			});	
		}
	  }
	});
});