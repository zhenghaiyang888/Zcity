function city(class1,class2,class3,src) {
	$.ajax({
		type:"get",
		url:src,
		data:'',	
		dataType:'json',
		success:function(data){
			$.each(data.p,function(a,b){
//				console.log(b.p)
                //渲染省
				$(class1).append("<option>"+b+"</option>");
				$(class1).change(function(){
					var $sel1=$(this).val();
					$(class2).html("<option>市</option>");
					$(class3).html("<option>区/县</option>");
				
//						console.log()
						$.each(data.c, function(d,e) {
//							console.log(d)
								if($sel1==d){
//								console.log(b.p)
//                              循环渲染市
								$.each(e, function(f,g) {
//									console.log(g);	
									$(class2).append("<option>"+g+"</option>");
								});
//								当市改变的时候渲染 区/县
								$(class2).change(function(){
									$(class3).html("<option>区/县</option>");
									var $sel2=$(this).val();
									$.each(data.a, function(i,j) {
//										console.log(i);
										if($sel1+'-'+$sel2==i){
											$.each(j, function(l,k) {
//												console.log(k)
												$(class3).append("<option>"+k+"</option>");
											});
										}
									});
								})
							}
						});
				
				})
			})
		},
		error: function (e) {
			if(e.readyState==4){
				console.log(e.responseText);
			}
//			console.log(e)
			
        },
	});

}
