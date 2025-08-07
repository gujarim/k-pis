
    function capChange1(){
    	$('#signguCode').empty();
    	var hSignguCd = $('#hSignguCd').val();
    	var arr='<option value="">선택하세요.</option>';      
        $('#signguCode').append(arr); 
    	$.ajax({
            type:"post",
            url:"/selectSggList.do",
            data:"command=selectSggList&capCd="+$('#ctprvnCode').val(),
            dataType:"json",
            success:function(data){
                if(data.sggList.length>0){
                	 $.each(data.sggList,function(index,sggList){
	                		 var arr2 = "";
	                		 if(hSignguCd == sggList.sggCd){
	                			 arr2='<option value=\''+sggList.sggCd+'\' selected>'+sggList.sggNm+'</option>';
	                		 }else{
	                			 arr2='<option value=\''+sggList.sggCd+'\'>'+sggList.sggNm+'</option>';
	                		 }
	                		 $('#signguCode').append(arr2); 
                      }); 
                }
            },
            error : function(data) {
                alert("error");
            }
        });
    }
    
    function sggChange1(code){
        $('#emdCode').empty();
        var signguCode = "";
        var hEmdCd = $('#hEmdCd').val();
        
        if(code != undefined){
        	$('#signguCode').val(code);
        	signguCode = code;
        }else{
        	signguCode = $('#signguCode').val();
        	hEmdCd = "";
        }
        
        var arr='<option value="">선택하세요.</option>';      
        $('#emdCode').append(arr); 
        $.ajax({
            type:"post",
            url:"/selectTtsList.do",
            data:"command=selectTtsList&sggCd="+signguCode,
            dataType:"json",
            success:function(data){
                if(data.ttsList.length>0){
                     $.each(data.ttsList,function(index,ttsList){
                           var arr2 = "";
                           if(hEmdCd == ttsList.ttsCd){
                        	   arr2='<option value=\''+ttsList.ttsCd+'\' selected>'+ttsList.ttsNm+'</option>';
                           }else{
                        	   arr2='<option value=\''+ttsList.ttsCd+'\'>'+ttsList.ttsNm+'</option>';
                           }
                           $('#emdCode').append(arr2); 
                      }); 
                }
            },
            error : function(data) {
                alert("error");
            }
        });
    }
   
    function ttsChange1(code){
        
        $('#liCode').empty();
        var emdCode = "";
        var hLiCd = $('#hLiCd').val();
        /* 22.11 xss 취약점 조치 KHS */
        /*console.log(code)*/
        if(code != undefined){
        	$('#emdCode').val(code);
        	emdCode = code;
        }else{
        	emdCode = $('#emdCode').val();
        	hLiCd = "";
        }
        /* 22.11 xss 취약점 조치 KHS */
        /*console.log($('#emdCode').val())*/
        /*console.log("emdCode : "+emdCode)*/
        var arr='<option value="">선택하세요.</option>';      
        $('#liCode').append(arr); 
        $.ajax({
            type:"post",
            url:"/selectRiList.do",
            data:"command=selectRiList&ttsCd="+emdCode,
            dataType:"json",
            success:function(data){
                if(data.riList.length>0){
                     $.each(data.riList,function(index,riList){
                    	 var arr2="";
                         if(hLiCd == riList.riCd){
                      	   arr2='<option value=\''+riList.riCd+'\' selected>'+riList.riNm+'</option>';
                         }else{
                      	   arr2='<option value=\''+riList.riCd+'\'>'+riList.riNm+'</option>';
                         }
                            $('#liCode').append(arr2); 
                      }); 
                }
            },
            error : function(data) {
                alert("error");
            }
        });
    }
    
    function capChange2(){
    	$('#signguCodeR').empty(); 
    	var hSignguCd = $('#hSignguCdR').val();
    	var arr='<option value="">선택하세요.</option>';      
        $('#signguCodeR').append(arr); 
    	$.ajax({
            type:"post",
            url:"/selectSggList.do",
            data:"command=selectSggList&capCd="+$('#ctprvnCodeR').val(),
            dataType:"json",
            success:function(data){
                if(data.sggList.length>0){
                	 $.each(data.sggList,function(index,sggList){
                		   var arr2="";
                		   if(hSignguCd == sggList.sggCd){
                			   arr2='<option value=\''+sggList.sggCd+'\' selected>'+sggList.sggNm+'</option>';
                		   }else{
                			   arr2='<option value=\''+sggList.sggCd+'\'>'+sggList.sggNm+'</option>';
                		   }
                	        $('#signguCodeR').append(arr2); 
                      }); 
                }
            },
            error : function(data) {
                alert("error");
            }
        });
    }
    
    function sggChange2(code){
    	if(code == undefined){
    		$('#roadFstCode').val(""); 
    		$('#roadCd').val(""); 
    	}
    }
    
    function roadChange(code){
    	$('#roadCd').empty(); 
    	var arr='<option value="">선택하세요.</option>';      
        $('#roadCd').append(arr);
        
        var hRoadCd = $('#hRoadCd').val();
        var signguCodeR = "";
        if(code != undefined){
        	signguCodeR = code;
        }else{
        	signguCodeR = $('#signguCodeR').val();
        	hRoadCd = "";
        }
    	$.ajax({
            type:"post",
            url:"/selectRoadList.do",
            data:"command=selectRoadList&sggCd="+signguCodeR+"&roadFstCd="+$('#roadFstCode').val(),
            dataType:"json",
            success:function(data){
                if(data.roadList.length>0){
                	 $.each(data.roadList,function(index,roadList){
                		   var arr2="";
                		   if(hRoadCd == roadList.roadNmCd){
                			   arr2='<option value=\''+roadList.roadNmCd+'\' selected>'+roadList.roadNm+'</option>';
                		   }else{
                			   arr2='<option value=\''+roadList.roadNmCd+'\'>'+roadList.roadNm+'</option>';
                		   }
                	        $('#roadCd').append(arr2); 
                      }); 
                }
            },
            error : function(data) {
                alert("error");
            }
        });
    }
    
    function onlyNumber(event){

        event = event || window.event;
        var keyID = (event.which) ? event.which : event.keyCode;
        if ( (keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 9 || keyID == 46 || keyID == 37 || keyID == 39 ) {
            return true;
        } else {
            return false;
        }
    }
    
    function removeChar(event) {
        event = event || window.event;
        var keyID = (event.which) ? event.which : event.keyCode;
        if ( keyID == 8 || keyID == 9 || keyID == 46 || keyID == 37 || keyID == 39 ) {
            return;
        } else {
            event.target.value = event.target.value.replace(/[^0-9]/g, "");
        }
    }
    
    $(function() {
    	$.ajaxSetup({
    		cache : false
    	});

		$('.datepicker').datepicker({
			showOn: "button",
			buttonImageOnly: true,
			buttonImage: "./resources/images/btn/btn_datepicker.png",
			buttonText: "달력선택",
			changeMonth        : true,
			changeYear         : true,
			showOtherMonths    : true,
			selectOtherMonths  : true,
			currentText:'오늘',
            closeText:'지우기',
            showButtonPanel:true,
			onClose: function () {
			       if ($(window.event.srcElement).hasClass('ui-datepicker-close')) {
			            $(this).val('');
			        }
			 }
		});
		
		
        $("input[type=text]").attr("onkeypress","notSpecial(event)");
        $("textarea").attr("onkeypress","notSpecial(event)");
        
        $("span[id^='imgFileCancel']").click(function(){
	       	$(this).parents('.fileF').find('.upload').val("");
	       	$(this).parents('.fileF').find('.fileName').val("");
        });

        
    });

    function checkValidFileExtsn_Agency(agencyBoardType) {
            var isValid = "valid";
            
            if(agencyBoardType == "supply") { // 공급부동산현황
                if(isValid == "valid") {        
                    $("input[name^='imgFile']").each(function(){ // 이미지등록 파일      
                        if($(this).val()) {
                            if("invalid" == checkValidFileExtsn($(this), "imageAllow", "이미지등록은")) { //  확장자 검사
                                isValid = "invalid";                    
                                return;   
                            }
                        }
                    });     
                }      
            }

            return isValid;
        }
        
        function clearInputTypeFile($file) {    
           /* var browser = navigator.userAgent.toLowerCase();
            if(browser.indexOf("msie") != -1) { //브라우져별 초기화 방식 다름 (인터넷 익스플러러와 그외로 구분함)      
            	$file.parents('.fileF').find('.fileName').val("");
                $file.replaceWith($file.clone(true));
            }else {
            	$(this).parents('.fileF').find('.upload').val("");
    	       	$(this).parents('.fileF').find('.fileName').val("");
                
            }*/
        }
        
        function isValidFileExtsn(fileExtsn, allowExtsns) { 
            var isValid = "invalid";
            for(var i=0, aExtsn; aExtsn=allowExtsns[i]; i++) {
                if (fileExtsn == aExtsn) {
                    isValid = "valid";     
                    break;
                }       
            }
            return isValid;
        }
        
        function checkValidFileExtsn($file, allowRange, columnName) {
            var isValid = "valid"; // 허용하는 파일 확장자 여부
            var fileName = $file.val(); // 파일이름
            var fileExtsn = fileName.slice(fileName.lastIndexOf(".")+1).toLowerCase(); // 입력받은 파일의 확장자  
            var imageAllowExtsns = new Array("jpg", "jpeg", "png", "bmp", "gif"); // 이미지 허용
            var documentAllowExtsns = new Array("hwp", "doc", "docx", "txt", "xls", "xlsx", "ppt", "pptx", "pdf"); // 문서 허용
            var allExtsns = new Array("hwp", "doc", "docx", "txt", "xls", "xlsx", "ppt", "pptx", "pdf", "jpg", "jpeg", "png", "bmp", "gif"); // 이미지+문서 허용
            var invalidMsg = ""; // 허용하지 않는 파일확장자의 경우 메시지
            
            if(fileName) { // 업로드할 파일이 있는 경우만 검사
                
                if(allowRange == "imageAllow") {
                    
                    isValid = isValidFileExtsn(fileExtsn, imageAllowExtsns); // 업로드 하는 파일이 이미지 파일인지 확인
                    if(isValid == "invalid") {
                        fn_alert("이미지만 등록 가능합니다.");
                        clearInputTypeFile($file);
                    }
                    
                }else if(allowRange == "documentAllow") {
                    
                    isValid = isValidFileExtsn(fileExtsn, documentAllowExtsns); // 업로드 하는 파일이 문서 파일인지 확인
                    if(isValid == "invalid") { 
                        invalidMsg = "문서만 등록 가능합니다.";
                        if(columnName) {
                            invalidMsg = columnName + " " + invalidMsg;
                        }       
                        fn_msgPopupOk("파일업로드제한", invalidMsg);
                        clearInputTypeFile($file);
                    }
                    
                }else if(allowRange == "all") {
                    
                    isValid = isValidFileExtsn(fileExtsn, allExtsns); // 업로드 하는 파일이 이미지+문서 파일인지 확인
                    if(isValid == "invalid") {
                        invalidMsg = fileExtsn + " " + "파일은 업로드하실 수 없습니다.";     
                        fn_msgPopupOk("파일업로드제한", invalidMsg);
                        clearInputTypeFile($file);
                    }
                    
                }
                
            }
            
            return isValid;
        }
        
    //입력불가한 검색조건 특수문자
    function notSpecial(event) {
    	if (event.keyCode && ((event.keyCode >= 37 && event.keyCode <= 39) || (event.keyCode == 34) || 
    			(event.keyCode == 42) || (event.keyCode == 92) || (event.keyCode == 60) || (event.keyCode == 62))) {
    		event.preventDefault();
    	}
    }
    
    function fn_alert(msg, _this) {

        var option = {
            tlt: '알림',
            msg: msg,
            type: 'alert',
            callback: ''
        }
        ui.popup.msg(option, _this); //메세지 팝업
        $(".lastFocus").focus(); 
        return false;
    }

    //fn_alert2(메시지내용, focus 잡을 요소)
    function fn_alert2(msg, _this) {
        var option = {
            tlt: '알림',
            msg: msg,
            type: 'alert',
            callback: ''
        }

        ui.popup.msg(option, _this); //메세지 팝업
   //   $(".lastFocus").focus();
        $(".lastFocus").on({
        	focus:function(){      
    				$(this).css("border-color", "red").css("outline", "none");
    				},
    		blur:function(){
    			$(this).css("outline", "none").css("border-color", "white");
    		}
        });
        //$(".lastFocus").attr("tabindex", 1).focus();  
        return false;
    }  
    
    //fn_alert3 div, span 태그 포커스 잡기 (메시지내용, focus 잡을 요소)
    /*function fn_alert3(msg, _this) {
        var option = {
            tlt: '알림',
            msg: msg,
            type: 'alert',
            callback: ''
        }
        ui.popup.msg(option, _this); //메세지 팝업
        setTimeout(function(){_this.focus();}, 1); 
        setTimeout(function(){_this.attr("tabindex", -1).focus();}, 1);
        return false;
    } */
    
    function fn_later(obj,msgNum) {
    	 var message = '';
         switch (msgNum) {
             case 99:
            	 message = '추후확인';
                 break;    
             default:
                 break;
         }
    	
        var option = {
            tlt: '알림',
            msg: message,
            type: 'alert',
            callback: ''
        }
        ui.popup.msg(option, obj); //메세지 팝업
        $(".lastFocus").focus(); 
        return false;
    }
    
    
    
     
    //게시판 파일로드 다운로드시 호출, 김현재. 2020-12-10 
    function fn_downloadFiles(fileSn){  
    	var url = "getDownloadFile.do?"
    		    + "fileSn="+fileSn;
    	downloadFile(url);
//    	$.ajax({
//            url : 'selectFqcQuesFile.do'
//            , type : 'POST'
//            , data : {"fileSn":fileSn}
//            , dataType: 'json'
//            , success : function(data){
//                var result = data.result.fileUtilSVO;
//
//                // fileExtsn ==> 확장자
//                // realFileName ==> 원래 파일명 (서버에 저장된 파일명)
//                // saveFileName ==> 다운로드할 파일명                
//                // var url = "downloadFqcQuesFile.do?"
//                var url = "getDownloadFile.do?"		 
//                    +"fileExtsn="+result.fileExtsn
//                    +"&realFileName="+result.streFileNm
//                    +"&saveFileName="+result.orignlFileNm;  
//
//                 downloadFile(url);                                            
//            },
//            error : function (){
//                alert("에러");
//            }               
//        }); 	  	
    }
    
    
    function fn_downloadEncodeFiles(fileSn){  
    	var url = "getDownloadEncodeFile.do?"
    		+ "fileSn="+fileSn;
    	downloadFile(url);
    }
    /**
     * @param url (folderName, realFileName, saveFileName)
     * 파일을 다운로드 한다.
     * */
    function downloadFile(url){
        var newIfrm = document.createElement("iframe");
        newIfrm.src = encodeURI(url);
        newIfrm.style.display = 'none';
        document.body.appendChild(newIfrm);
    }
  //로딩화면 호출
    function showLoading() {
    	var mobile = (/iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase()));
    	
    	var maskHeight = $(document).height();
    	var maskWidth = window.document.body.clientWidth;
    	var mask = "<div id = 'mask' style = 'position:absolute;  z-index:9000; background-color:#000000; display:none; left:0; top:0'></div>";
    	var loadingImg = "";
    	if(mobile){
    		loadingImg += "<div id = 'loadingImg' style = 'position:absolute; left:20%; top:0%; display:none; z-index:10000;'>";
    	}else{
    		loadingImg += "<div id = 'loadingImg' style = 'position:absolute; left:50%; top:40%; display:none; z-index:10000;'>";
    	}
    	loadingImg += "<img src = '../resources/images/loading.gif'/>";
    	loadingImg += "</div>";
    	
    	$('body').append(mask);
    	$('#mask').append(loadingImg);
    	$('#mask').css({
    		'width':maskWidth
    		,'height':maskHeight
    		,'opacity':'0.3'
    	});
    	
    	$('#mask').show();
    	$('#loadingImg').show();
    }
  //로딩화면 호출
    function hideLoading() {
    	$('#mask, #loadingImg').hide();
    	$('#mask, #loadingImg').remove();
    }
    //텍스트창 맥스 입력값 확인
    /*function chk_maxlength(){
 	   var pop_item;
 	   var bool_length = false;
 	   $(":text").each(function(index,item){
            if(item.maxLength != -1 && item.maxLength < 10000){
            	if(item.maxLength < item.value.length){
            		pop_item = item;
            		bool_length = true;
            		//fn_alert2(item.title , $("#supInstNm"));
                    return false;
            	}
            }	
        });
        if(bool_length){
 	       	var pop_text = pop_item.title + "값의 길이를 " + pop_item.maxLength + "자이하로 입력하세요";
 	       	fn_alert2(pop_text, pop_item);
 	       	return;
        }
        return true;
    }*/
    
    
    //브라우저 뒤로가기 시 pageNo파리미터 저장
    function changeUrlUtil(title, changeUrl){
		  //if(typeof(history.pushState) != "undefine"){
			  var obj = {Title:"", ChangeUrl: changeUrl};
			  history.pushState(obj, obj.Title, obj.ChangeUrl);
		  //}else{
			  //alert("HTML5");
		  //}
    }
    
    //첨부파일 확장자 체크
    function searchFileExtsn(fileName){
    	var fileNm = fileName.split('.').pop().toLowerCase();
    	
    	if(fileNm != "jpg" && fileNm != "jpeg" && fileNm != "png" && fileNm != "gif" && fileNm != "xls" && fileNm != "xlsx"
			&& fileNm != "txt" && fileNm != "doc" && fileNm != "docx" && fileNm != "pdf" && fileNm != "hwp" && fileNm != "hwpx" && fileNm != "pptx" && fileNm != "ppt"){
		     fn_alert2("첨부파일 형식이 맞지 않습니다. <br/>문서와 이미지 파일만 첨부 가능합니다.", $("#fileId"));
		     return true;
		 }else{
			 return false;
		 }
    }
    
    //다중 엔터,클릭 방지
    var doubleSubmitFlag = false;
    function doubleSubmitCheck(){
        if(doubleSubmitFlag){
            return doubleSubmitFlag;
        }else{
            doubleSubmitFlag = true;
            return false;
        }
    }
    
    
