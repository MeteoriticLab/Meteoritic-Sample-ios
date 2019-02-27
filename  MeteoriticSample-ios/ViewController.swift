//
//  ViewController.swift
//   MeteoriticSample-ios
//
//  Created by mahmoud fekry on 2/26/19.
//  Copyright © 2019 mahmoud fekry. All rights reserved.
//

import UIKit
import Meteoritic
class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }


    @IBAction func playeAction(_ sender: Any) {
        self.addMeteoriticAnimation("5c76855c8788723f515a6c32")
    }
}

