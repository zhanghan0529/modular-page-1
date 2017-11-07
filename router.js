app.get("/getphotos",function(req,res){
    var photos = [
		{
			img: "http://images.talayo.com/uploadfile/spots/20141012/20141012151419_56606.jpg"
		},
		{
			img: "http://i3.sinaimg.cn/travel/2013/1031/U8822P704DT20131031140320.jpg"
		},
		{
			img: "http://www.come23.com/upload/201607/26/201607261523488812.png"
		},
		{
			img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509599702603&di=eab9343ed45469eb400495887ac7b368&imgtype=0&src=http%3A%2F%2Fcc362.ikafan.com%2Fstatic%2FL3Byb3h5L2h0dHAvaW1hZ2U5OS4zNjBkb2MuY29tL0Rvd25sb2FkSW1nLzIwMTYvMDkvMTIwOS83OTg3OTkzNF8zMS5qcGc%3D.jpg"
		},
		{
			img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509599748773&di=105a1cafd3947985d14150eb253f411c&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20160210%2Fmp58506605_1455098753653_2.jpeg"
		},
		{
			img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509599748773&di=9464a1817d8f0f73d837682d809bce61&imgtype=0&src=http%3A%2F%2Fnb.people.com.cn%2Fmediafile%2F201109%2F16%2FF201109160824072346600000.jpg"
		},
		{
			img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509599748773&di=04700c2bfe5a930b427bb91c36309000&imgtype=0&src=http%3A%2F%2Fimg1.qunarzz.com%2Ftravel%2Fd7%2F1505%2Fb5%2F67d8b49b7325b6.jpg_r_650x487x95_225956ed.jpg"
		},
		{
			img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509599748772&di=5dc336162cb0f1e236c2d26e540f3f09&imgtype=0&src=http%3A%2F%2Ffile26.mafengwo.net%2FM00%2FF4%2FCF%2FwKgB4lJ3SX6AOXW7AAffNnpD1x033.rbook_comment.w600_h400.jpeg"
		},
		{
			img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509599748770&di=267e5c4abbf24977b8d504967c0d2584&imgtype=0&src=http%3A%2F%2Fpic.lvmama.com%2Fuploads%2Fpc%2Fplace2%2F2015-03-04%2Ff104d592-59d3-49a5-af2a-0647d90daa62.jpg"
		},
		{
			img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509599748782&di=3bd23fd733b604946959d3aee46116bd&imgtype=0&src=http%3A%2F%2Ffile27.mafengwo.net%2FM00%2FFA%2F3E%2FwKgB6lPcxVWAd-AxAAZbMwoloKo17.groupinfo.w600l.jpeg"
		},
		{
			img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509599748779&di=8e23a0689ccbd8ad5e12e938f74d77ec&imgtype=0&src=http%3A%2F%2Fm.tuniucdn.com%2Ffilebroker%2Fcdn%2Fvnd%2Fba%2F66%2Fba66ec87cc9e1d04d73e635655ce9c4c_w500_h280_c1_t0.jpg"
		},
		{
			img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509599748779&di=2c610992ba4cf62a371692a9b5a70080&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1309%2F05%2Fc5%2F25276550_1378344099240_mthumb.jpg"
		},
		{
			img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509599748778&di=ba2136c3ce8fc3fd1d37fda4a1b9f1c8&imgtype=0&src=http%3A%2F%2Ffile21.mafengwo.net%2FM00%2FA2%2FB3%2FwKgB21Ajnk_FDIJEAAzRYqgHMpE77.jpeg"
		},
		{
			img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509599902765&di=ab8c063574f7700fbe88bea382281d06&imgtype=0&src=http%3A%2F%2Fwww.coolzou.com%2FPhoto%2F2014%2F04%2F15%2FInfoArticle_22994_3.jpg"
		},
    ]
    var index = req.query.page;
	var len = 3;
	var data = photos.slice(index*len,index*len+len)//0,3 3,6
	
    res.send({
        status:0,
        data : data
    })
})