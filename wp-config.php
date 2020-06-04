<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do MySQL
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Configurações do MySQL - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define( 'DB_NAME', 'qinteres_semchilique' );

/** Usuário do banco de dados MySQL */
define( 'DB_USER', 'qinteres_admin' );

/** Senha do banco de dados MySQL */
define( 'DB_PASSWORD', 'admin' );

/** Nome do host do MySQL */
define( 'DB_HOST', 'localhost' );

/** Charset do banco de dados a ser usado na criação das tabelas. */
define( 'DB_CHARSET', 'utf8mb4' );

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define( 'DB_COLLATE', '' );

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'N@^H-74{*L4@3kC=p#n$E=xNQ({D4_G2UoIp>EUwVv|sZ}5,oP/6,t:,#JsAh~rr' );
define( 'SECURE_AUTH_KEY',  '9Kl&RcpX6E.02bYL-ZZH&Yy/`*FdZr{~NqvI!y*N{!`P`:?Uz[~J+SD&?e],YhUd' );
define( 'LOGGED_IN_KEY',    '0s^n*]fAJMH0Fv>=vw4|OP;V-L@,[l@xSaqR_hfP{Ip(vF,xrj<$n_9BcYL74?sa' );
define( 'NONCE_KEY',        '1t(m>jX<dL!dvUUs)?tudqh%;XiSZ_G7y>a-:HNiNKO-xR2#R={e-F]-vsn 5@X~' );
define( 'AUTH_SALT',        '*1Fy8:S$fEj824m@#Q:9 #wx(5C)+lN2v_/[<QOuloQ7C>X?txIa[3aEyySs|OcK' );
define( 'SECURE_AUTH_SALT', 'eY*WBkcOi:j/B%$G[tH[F6?$Z}+BjP1{dBYm]pV3cJc{,QH&HEAdE:|d^TATc5S2' );
define( 'LOGGED_IN_SALT',   ',Auqju:HVj=Er$_tY!Aaw#!yhPDqB=gZKBI`)zT&[8mGc7B0OXf+x17=/2`j<A&x' );
define( 'NONCE_SALT',       'Z<zip9(0i;~0r>*H^NE]477b^skC2LfvL+NgP^(=6TF-)1&Y[z*MUod`re-QA:*N' );

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix = 'wp_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Configura as variáveis e arquivos do WordPress. */
require_once ABSPATH . 'wp-settings.php';
