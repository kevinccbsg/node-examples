db.supplier.aggregate([
          {$project:
	          	{
	        	 infoSAPDTS:{ $ifNull: [ "$infoSAPMulti.DTS.suppliers", [] ] },
	        	 infoSAPGLOBAL:{ $ifNull: [ "$infoSAPMulti.GLOBAL.suppliers", [] ] },
	             infoSAPTELESAP:{ $ifNull: [ "$infoSAPMulti.TELESAP.suppliers", [] ] },
	        	 infoSAPVENEZUELA:{ $ifNull: [ "$infoSAPMulti.VENEZUELA.suppliers", [] ] },
	        	 infoSAPTERESA:{ $ifNull: [ "$infoSAPMulti.TERESA.suppliers", [] ] },
	        	 infoSAPnoMulti:"$infoSAP",
	           status: "$status",
	           risklevel: "$risklevel",
	           mapping: "$mapping",
	           noMapping: "$noMapping",
	           comments: "$comments",
             codigoSAC: "$codigoSAC"
	          }}
          ,
          {$project:
          {
              status: 1,
              risklevel: 1,
              mapping: 1,
              noMapping: 1,
              infoSAPnoMulti:1,
              comments: 1,
              codigoSAC:1,
          	  infoSAPMulti:{$concatArrays:["$infoSAPDTS","$infoSAPTELESAP","$infoSAPGLOBAL","$infoSAPVENEZUELA","$infoSAPTERESA"]}}
          }
          ,
          {
        	$unwind:
            {
              path: "$infoSAPMulti",
              preserveNullAndEmptyArrays: true
            }
        },
        {$match: { 
          $or:[
              {'infoSAPMulti.name': /^.*kapy.*$/i},
              {'infoSAPnoMulti.name':  /^.*kapy.*$/i}
              ]}}
        ]).pretty();

proveedores.aggregate([
        {$project:
          {
            infoSAPDTS:{ $ifNull: [ "$infoSAPMulti.DTS.suppliers", [] ] },
            infoSAPGLOBAL:{ $ifNull: [ "$infoSAPMulti.GLOBAL.suppliers", [] ] },
            infoSAPTDE:{ $ifNull: [ "$infoSAPMulti.TDE.suppliers", [] ] },
            infoSAPESPAÑA:{ $ifNull: [ "$infoSAPMulti.ESPAÑA.suppliers", [] ] },
            infoSAPVENEZUELA:{ $ifNull: [ "$infoSAPMulti.VENEZUELA.suppliers", [] ] },
            infoSAPTERESA:{ $ifNull: [ "$infoSAPMulti.TERESA.suppliers", [] ] },
            infoSAPnoMulti:"$infoSAP",
            status: "$status"
        }},
        {
          $project:
            {
            infoSAPnoMulti:1,
            status:1,
            infoSAPMulti:{$concatArrays:["$infoSAPDTS","$infoSAPTDE","$infoSAPESPAÑA","$infoSAPGLOBAL","$infoSAPVENEZUELA","$infoSAPTERESA"]}}
          },
          {
            $unwind:
            {
              path: "$infoSAPMulti",
              preserveNullAndEmptyArrays: true
            }
          },
          {$match: { $or:[where,whereMulti]}},
          {
            $group : {
               _id : { "_id":"$_id"},
              count: { $sum: 1 }
            }
          },{$group:{_id:null, total:{$sum:"$count"}}}]
