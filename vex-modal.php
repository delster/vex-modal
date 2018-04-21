<?php
/*
 *  Plugin Name:  Vex Modal
 *  Plugin URI:   https://github.com/delster/vex-modal
 *  Description:  Basic Plugin Wrapper for vex Modal.
 *  Version:      1.0
 *  Author:       David Elster
 *  Author URI:   https://github.com/delster/
 *  License:      GPL2
 *  License URI:  https://www.gnu.org/licenses/gpl-2.0.html
 */
defined( 'ABSPATH' ) or die( 'No peeking!' );

# Include dependencies.
function add_vex_dependencies() {
  wp_enqueue_style( 'vex-modal', plugin_dir_url( __FILE__ ) . 'includes/vex.css' );
  wp_enqueue_style( 'vex-modal-theme-default', plugin_dir_url( __FILE__ ) . 'includes/vex-theme-default.css' );
  wp_enqueue_style( 'vex-custom', plugin_dir_url( __FILE__ ) . 'css/wasabi.css' );
  wp_enqueue_script( 'vex-combined-minified', plugin_dir_url( __FILE__ ) . 'includes/vex.combined.min.js', null, null, true );
  wp_enqueue_script( 'vex-clients-modal', plugin_dir_url( __FILE__ ) . 'js/wasabi.js', null, null, true );
}
add_action('wp_enqueue_scripts', 'add_vex_dependencies');