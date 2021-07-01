var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"],
btnExitFullscreen:["btnDisableFullScreen"],
btnFullscreen:["btnFullScreen"],
btnHome:["homebtnHelp"],
btnMore:["btnMoreOptionsLeft"],
frmToc:["btnBookMark"],
frmSearch:["btnSearch"],
frmLinkLabel:["lblLink"] //lblLink  frmShareLinkLabel
};
	var bookConfig = {
	maxHeightToSmallMode: 360,	
	appName:'anyflip',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"anyflip",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"ShOW",
	ZoomButton:"",
	ZoomButtonVisible:"yES",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.anyflip.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:"javascript/text_position[%d].js"
};
	
	
	
	bookConfig.loadingCaptionColor="#dddddd";bookConfig.loadingPicture="";bookConfig.loadingBackground="#323232";bookConfig.appLogoIcon="../../../booklogo.png";bookConfig.appLogoLinkURL="http://anyflip.com";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#444444";bookConfig.iconColor="#cccccc";bookConfig.pageNumColor="#333333";bookConfig.iconFontColor="#ffffff";bookConfig.toolbarAlwaysShow="No";bookConfig.formFontColor="#27181a";bookConfig.formBackgroundColor="#27181a";bookConfig.buttonsSortXML=[];bookConfig.showBookInstructionOnStart="False";bookConfig.InstructionsButtonVisible="Show";bookConfig.showInstructionOnStart="No";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.aboutButtonVisible="Hide";bookConfig.aboutContactInfoTxt="";bookConfig.enablePageBack="Hide";bookConfig.ShareButtonVisible="Show";bookConfig.socialShareSetting="";bookConfig.isInsertFrameLinkEnable="Show";bookConfig.addCurrentPage="No";bookConfig.facebookShotImageURL="";bookConfig.EmailButtonVisible="Show";bookConfig.btnShareWithEmailSubject="";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Show";bookConfig.isHideTabelOfContentNodes="Yes";bookConfig.SearchButtonVisible="Show";bookConfig.leastSearchChar="3";bookConfig.searchFontColor="#ffffff";bookConfig.searchKeywordFontColor="#ffb000";bookConfig.searchHightlightColor="#fdc606";bookConfig.SelectTextButtonVisible="Hide";bookConfig.SelectTextButtonIcon="";bookConfig.PrintButtonVisible="Hide";bookConfig.printWatermarkFile="";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="No";bookConfig.BackgroundSoundURL="";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="3";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.maxZoomWidth="0";bookConfig.defaultZoomWidth="0";bookConfig.mouseWheelFlip="Yes";bookConfig.DownloadButtonVisible="Hide";bookConfig.DownloadURL="";bookConfig.downloadConfig="";bookConfig.PhoneButtonVisible="Hide";bookConfig.PhoneButtonIcon="";bookConfig.PhoneNumbers=[];bookConfig.AnnotationButtonVisible="Hide";bookConfig.FullscreenButtonVisible="Show";bookConfig.WeChatShareButtonVisible="Hide";bookConfig.WeChatShareButtonIcon="";bookConfig.bgBeginColor="#1f2232";bookConfig.bgEndColor="#1f2232";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="../files/mobile-ext/backGroundImgURL.jpg?1598430857";bookConfig.backgroundPosition="Stretch";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="100";bookConfig.LeftShadowAlpha="1";bookConfig.RightShadowWidth="40";bookConfig.RightShadowAlpha="1";bookConfig.ShowTopLeftShadow="Yes";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572f0d";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#ffffff";bookConfig.flipshortcutbutton="Show";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.3";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.thicknessWidthType="Thick";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="No";bookConfig.isSingleBookFullWindowOnMobile="No";bookConfig.isStopMouseMenu="Yes";bookConfig.restorePageVisible="No";bookConfig.totalPagesCaption="";bookConfig.pageNumberCaption="";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.hideMiniFullscreen="No";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="350";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="Yes";bookConfig.appLargeLogoIcon="";bookConfig.appLargeLogoURL="";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.updateURLForPage="No";bookConfig.LinkDownColor="#0000ff";bookConfig.LinkAlpha="0.4";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.googleAnalyticsID="";bookConfig.languageSetting="English";bookConfig.UIBaseURL="//static.anyflip.com/resourceFiles/html5_templates/template/Handy/";bookConfig.totalPageCount="29";bookConfig.largePageWidth="595";bookConfig.largePageHeight="841";bookConfig.bookTitle="INSTITUTEBROCHURE2020";bookConfig.normalPath="../files/mobile/";bookConfig.largePath="../files/mobile/";bookConfig.thumbPath="../files/thumb/";bookConfig.productName="AnyFlip";bookConfig.appAppVersion="1.0.0";bookConfig.securityType="1";bookConfig.excludeFrontPages="0";
var language = [{"language":"English","btnFirstPage":"First","btnNextPage":"Next Page","btnLastPage":"Last","btnPrePage":"Previous Page","btnDownload":"Download","btnPrint":"Print","btnSearch":"Search","btnClearSearch":"Clear","frmSearchPrompt":"Clear","btnBookMark":"Table of content","btnHelp":"Help","btnHome":"Home","btnFullScreen":"Enable FullScreen","btnDisableFullScreen":"Disable FullScreen","btnSoundOn":"Sound On","btnSoundOff":"Sound Off","btnShareEmail":"Share","btnSocialShare":"Social Share","btnZoomIn":"Zoom In","btnZoomOut":"Zoom Out","btnDragToMove":"Move by mouse drag","btnAutoFlip":"Auto Flip","btnStopAutoFlip":"Stop Auto Flip","btnGoToHome":"Return Home","frmHelpCaption":"Help","frmHelpTip1":"Double click to zoom in or out","frmHelpTip2":"Drag the page corner to view","frmPrintCaption":"Print","frmPrintBtnCaption":"Print","frmPrintPrintAll":"Print All Pages","frmPrintPrintCurrentPage":"Print Current Page","frmPrintPrintRange":"Print Range","frmPrintExampleCaption":"Example: 2,5,8-26","frmPrintPreparePage":"Preparing Page:","frmPrintPrintFailed":"Print Failed:","pnlSearchInputInvalid":"(Minimal request length is 3 symbols)","loginCaption":"Login","loginInvalidPassword":"Not a valid password!","loginPasswordLabel":"Password:","loginBtnLogin":"Login","loginBtnCancel":"Cancel","btnThumb":"Thumbnails","lblPages":"Pages:","lblPagesFound":"Pages:","lblPageIndex":"Page","btnAbout":"About","frnAboutCaption":"About & Contact","btnSinglePage":"Single Page","btnDoublePage":"Double Page","btnSwicthLanguage":"Switch Language","tipChangeLanguage":"Please select a language below...","btnMoreOptionsLeft":"More Options","btnMoreOptionsRight":"More Options","btnFit":"Fit Window","smallModeCaption":"Click to view in fullscreen","btnAddAnnotation":"Add Annotations","btnAnnotation":"Annotations","FlipPageEditor_SaveAndExit":"Save and Exit","FlipPageEditor_Exit":"Exit","DrawToolWindow_Redo":"Redo","DrawToolWindow_Undo":"Undo","DrawToolWindow_Clear":"Clear","DrawToolWindow_Brush":"Brush","DrawToolWindow_Width":"Width","DrawToolWindow_Alpha":"Alpha","DrawToolWindow_Color":"Color","DrawToolWindow_Eraser":"Eraser","DrawToolWindow_Rectangular":"Rectangular","DrawToolWindow_Ellipse":"Ellipse","TStuff_BorderWidth":"Border Width","TStuff_BorderAlph":"Border Alpha","TStuff_BorderColor":"Border Color","DrawToolWindow_TextNote":"Text Note","AnnotMark":"Bookmarks","lastpagebtnHelp":"Last page","firstpagebtnHelp":"First page","homebtnHelp":"Return to home page","aboubtnHelp":"About","screenbtnHelp":"Open this application in full-screen mode","helpbtnHelp":"Show help","searchbtnHelp":"Search from pages","pagesbtnHelp":"Take a look at the thumbnail of this brochure","bookmarkbtnHelp":"Open Bookmarks","AnnotmarkbtnHelp":"Open Table of content","printbtnHelp":"Print the brochure","soundbtnHelp":"Turn on or off the sound","sharebtnHelp":"Send Email to","socialSharebtnHelp":"Social Share","zoominbtnHelp":"Zoom in","downloadbtnHelp":"Downdlaod this brochure","pagemodlebtnHelp":"Switch Single and double page mode","languagebtnHelp":"Switch Lauguage","annotationbtnHelp":"Add Annotation","addbookmarkbtnHelp":"Add Bookmark","removebookmarkbtnHelp":"Remove Bookmark","updatebookmarkbtnHelp":"Update Bookmark","btnShoppingCart":"Shopping Cart","Help_ShoppingCartbtn":"Shopping Cart","Help_btnNextPage":"Next page","Help_btnPrePage":"Previous page","Help_btnAutoFlip":"Auto filp","Help_StopAutoFlip":"Stop atuo filp","btnaddbookmark":"Add","btndeletebookmark":"Delete","btnupdatebookmark":"Update","frmyourbookmarks":"Your bookmarks","frmitems":"items","DownloadFullPublication":"Full Publication","DownloadCurrentPage":"Current Page","DownloadAttachedFiles":"Attached Files","lblLink":"Link","btnCopy":"Copy Button","infCopyToClipboard":"Your browser does not support clipboard.","restorePage":"Would you like to restore previous session","tmpl_Backgoundsoundon":"Background Sound On","tmpl_Backgoundsoundoff":"Background Sound Off","tmpl_Flipsoundon":"Flip Sound On","tmpl_Flipsoundoff":"Flip Sound Off","Help_PageIndex":"The current page number","tmpl_PrintPageRanges":"PAGE RANGES","tmpl_PrintPreview":"PREVIEW","btnSelection":"Select Text","loginNameLabel":"Name:","btnGotoPage":"Go","btnSettings":"Setting","soundSettingTitle":"Sound Setting","closeFlipSound":"Close Flip Sound","closeBackgroundSound":"Close Backgorund Sound","frmShareCaption":"Share","frmShareLinkLabel":"Link:","frmShareBtnCopy":"Copy","frmShareItemsGroupCaption":"Social Share","frmPanelTitle":"Share it","frmShareQRcode":"QRCode","TAnnoActionPropertyStuff_GotoPage":"Go to page","btnPageBack":"Backward","btnPageForward":"Forward","SelectTextCopy":"Copy Selected Text","selectCopyButton":"Copy","TStuffCart_TypeCart":"Shopping Cart","TStuffCart_DetailedQuantity":"Quantity","TStuffCart_DetailedPrice":"Price","ShappingCart_Close":"Close","ShappingCart_CheckOut":"Checkout","ShappingCart_Item":"Item","ShappingCart_Total":"Total","ShappingCart_AddCart":"Add to cart","ShappingCart_InStock":"In Stock","TStuffCart_DetailedCost":"Shipping cost","TStuffCart_DetailedTime":"Delivery time","TStuffCart_DetailedDay":"day(s)","ShappingCart_NotStock":"Not enough in stock","btnCrop":"Crop","btnDragButton":"Drag","btnFlipBook":"Flip Book","btnSlideMode":"Slide Mode","btnSinglePageMode":"Single Page Mode","btnVertical":"Vertical Mode","btnHotizontal":"Horizontal Mode","btnClose":"Close","btnBookStatus":"Book View","checkBoxInsert":"Insert Current Page","lblLast":"This is the last page.","lblFirst":"This is the first page.","lblFullscreen":"Click to view in fullscreen","lblName":"Name","lblPassword":"Password","lblLogin":"Login","lblCancel":"Cancel","lblNoName":"User name can not be empty.","lblNoPassword":"Password can not be empty.","lblNoCorrectLogin":"Please enter the correct user name and password.","btnVideo":"Video Gallery","btnSlideShow":"Slide Show","btnPositionToMove":"Move by mouse position","lblHelp1":"Drag the page corner to view","lblHelp2":"Double click to zoom in, out","lblCopy":"Copy","lblAddToPage":"add to page","lblPage":"Page","lblTitle":"Title","lblEdit":"Edit","lblDelete":"Delete","lblRemoveAll":"Remove All","tltCursor":"cursor","tltAddHighlight":"add highlight","tltAddTexts":"add texts","tltAddShapes":"add shapes","tltAddNotes":"add notes","tltAddImageFile":"add image file","tltAddSignature":"add signature","tltAddLine":"add line","tltAddArrow":"add arrow","tltAddRect":"add rect","tltAddEllipse":"add ellipse","lblDoubleClickToZoomIn":"Double click to zoom in.","frmShareLabel":"Share","frmShareInfo":"You can easily share this publication to social networks.Just cilck the appropriate button below.","frminsertLabel":"Insert to Site","frminsertInfo":"Use the code below to embed this publication to your website.","btnQRCode":"Click to scan QR code","btnRotateLeft":"Rotate Left","btnRotateRight":"Rotate Right","lblSelectMode":"Select view mode please.","frmDownloadPreview":"Preview","frmHowToUse":"How To Use","lblHelpPage1":"Move your finger to flip the book page.","lblHelpPage2":"Zoom in by using gesture or double click on the page.","lblHelpPage3":"Click on the logo to reach the official website of the company.","lblHelpPage4":"Add bookmarks, use search function and auto flip the book.","lblHelpPage5":"Switch horizontal and vertical view on mobile devices.","TTActionQuiz_PlayAgain":"Do you wanna play it again","TTActionQuiz_Ration":"Your ratio is","frmTelephone":"Telephone list","btnDialing":"Dialing","lblSelectMessage":"Please copy the the text content in the text box","btnSelectText":"Select Text","btnNote":"Annotation","btnPhoneNumber":"Telephone","btnWeCharShare":"WeChat Share","btnMagnifierIn":"Magnifying Glass","btnMagnifierOut":"Magnifier Reduction","frmShareSmallProgram":"smallProgram","btnMagnifier":"Magnifier"}];
function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};

var pageEditor = [];
bookConfig.CreatedTime=1598430857;//suffix time
	
	if(bookConfig.languageSetting&&bookConfig.languageSetting!=""){
		bookConfig.language=bookConfig.languageSetting.split(";")[0];
	}
	
	if(window.location.search && window.location.search!="") {
		// var bookConfigImgKey = ["loadingPicture", "appLogoIcon", "printWatermarkFile", "BackgroundSoundURL", "backGroundImgURL"];
		var bookConfigImgKey = ["appLogoIcon"];
		for(var i = 0; i < bookConfigImgKey.length; i++) {
			var keyVal = bookConfig[bookConfigImgKey[i]];
			if(keyVal && keyVal!="") {
				bookConfig[bookConfigImgKey[i]] = keyVal + window.location.search;
			}
		} 
	}
try{
	var phoneNumber = bookConfig.PhoneNumbers;
} catch(e) {
	console.log("PhoneNumbers not nudefind");
	var phoneNumber = [];
}
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}